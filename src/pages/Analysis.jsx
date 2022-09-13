import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Tooltip, Legend, RangeColorSettingsDirective, RangeColorSettingDirective } from '@syncfusion/ej2-react-charts';
import { productsData, productsGrid, WTPData, WTPGrid, colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Analysis = () => {
  const { currentMode } = useStateContext();
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <div className=" mb-10">
        <p className="text-lg text-gray-400">Pages</p>
        <p className="text-3xl font-extrabold tracking-tight text-slate-900">Data Analysis</p>
      </div>

      {/* Return Data Table1 Market Share Table */}
      <p className="text-lg text-gray-400">Input Table1 :  Market Share and Price </p>
      <div className="md:m-10 md:p-10 bg-white rounded-3xl">
        <GridComponent
          dataSource={productsData}
          width="auto"
          allowPaging
          allowSorting
          pageSettings={{ pageCount: 4,pageSize:4 }}
          editSettings={editing}
        >
          <ColumnsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {productsGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
          </ColumnsDirective>
        </GridComponent>
      </div>

      {/* Return Data Table2 Willness To Pay */}
      <p className="text-lg text-gray-400">Input Table2 : Willness To Pay </p>
      <div className="md:m-10 md:p-10 bg-white rounded-3xl">
        <GridComponent
          dataSource={WTPData}
          width="auto"
          allowPaging
          allowSorting
          pageSettings={{ pageCount: 4,pageSize:4 }}
          editSettings={editing}
        >
          <ColumnsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {WTPGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
          </ColumnsDirective>
        </GridComponent>
      </div>

      {/* Return Data Table3 Constraint */}
      <p className="text-lg text-gray-400">Input Table3 : Constraints Of Products </p>
      <div className="md:m-10 md:p-10 bg-white rounded-3xl">
        <GridComponent
          dataSource={WTPData}
          width="auto"
          allowPaging
          allowSorting
          pageSettings={{ pageCount: 4,pageSize:4 }}
          editSettings={editing}
        >
          <ColumnsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {WTPGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
          </ColumnsDirective>
        </GridComponent>
      </div>

      {/* Products Structure Visualization Part */}
      <div className="w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          legendSettings={{ mode: 'Range', background: 'white' }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData[0]}
              name="USA"
              xName="x"
              yName="y"
              type="Column"
              cornerRadius={{
                topLeft: 10,
                topRight: 10,
              }}
            />
          </SeriesCollectionDirective>
          <RangeColorSettingsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {rangeColorMapping.map((item, index) => <RangeColorSettingDirective key={index} {...item} />)}
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Analysis;
