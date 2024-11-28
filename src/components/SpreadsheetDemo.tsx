import Spreadsheet from 'react-spreadsheet';

const SpreadsheetDemo = () => {
  const columnLabels = ['Gender', 'Brand', 'Division', 'SalesAmt', 'Sales%'];
  const data = [
    [
      { value: 'BOYS' },
      { value: 'LIFESTYLE' },
      { value: 'SKETCHERS BOYS' },
      { value: 882530 },
      { value: '=ROUND(D1/D11*100,2)' }
    ],
    [
      { value: 'BOYS' },
      { value: 'LIFESTYLE' },
      { value: 'STREET BOYS' },
      { value: 43122 },
      { value: '=ROUND(D2/D11*100,2)' }
    ],
    [
      { value: 'BOYS' },
      { value: 'PERFORMANCE' },
      { value: 'GO GOLF' },
      { value: 7023 },
      { value: '=ROUND(D3/D11*100,2)' }
    ],
    // Add a blank row
    [
      { value: 'BOYS TOTAL' }, // Gender
      { value: '' }, // Brand
      { value: '' }, // Division
      { value: '=SUM(D1:D3)' }, // SalesAmt
      { value: '=ROUNDUP(SUM(E1:E3),0)' } // Sales%
    ],
    [
      { value: '' }, // Gender
      { value: '' }, // Brand
      { value: '' }, // Division
      { value: '' }, // SalesAmt
      { value: '' } // Sales%
    ],

    [
      { value: 'GIRLS' }, // Gender
      { value: 'LIFESTYLE' }, // Brand
      { value: 'SKETCHERS GIRLS' }, // Division
      { value: 1044384 }, // SalesAmt
      { value: '=ROUND(D6/D11*100,2)' } // Sales%
    ],
    [
      { value: 'GIRLS' }, // Gender
      { value: 'LIFESTYLE' }, // Brand
      { value: 'SKETCHERS GIRLS' }, // Division
      { value: 52533 }, // SalesAmt
      { value: '=ROUND(D7/D11*100,2)' } // Sales%
    ],
    [
      { value: 'GIRLS' }, // Gender
      { value: 'LIFESTYLE' }, // Brand
      { value: 'GO GOLF' }, // Division
      { value: 9000 }, // SalesAmt
      { value: '=ROUND(D8/D11*100,2)' } // Sales%
    ],

    [
      { value: 'GIRLS TOTAL' }, // Gender
      { value: '' }, // Brand
      { value: '' }, // Division
      { value: '=SUM(D6:D8)' }, // SalesAmt
      { value: '=ROUND(SUM(E6:E8),0)' } // Sales%
    ],
    [
      { value: '' }, // Gender
      { value: '' }, // Brand
      { value: '' }, // Division
      { value: '' }, // SalesAmt
      { value: '' } // Sales%
    ],
    [
      { value: 'GRAND TOTAL' }, // Gender
      { value: '' }, // Brand
      { value: '' }, // Division
      { value: '=SUM(D4,D9)' }, // SalesAmt
      { value: '=ROUND(SUM(E4,E9),0)' } // Sales%
    ]
  ];

  return <Spreadsheet data={data} columnLabels={columnLabels} />;
};

export default SpreadsheetDemo;
