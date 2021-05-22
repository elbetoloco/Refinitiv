import { takeLatest, put, all, call } from 'redux-saga/effects';

import ChartActionTypes from './chart.types';

import { setChartSuccess, setChartFailure } from './chart.actions';

export function* fetchChart({ payload: { emisora } }) {
  const response = yield fetch(
    'http://api.trkd.thomsonreuters.com/api/Charts/Charts.svc/REST/Charts_1/GetChart_2',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Trkd-Auth-Token':
          '78FDE13DE102E83147606E8A9094207C54EB6E168F41F1D22AFBF32887C449009FA166515A7668F6D753D296ED164BCB7BFBE1AFD389123C050CAF1C02CF063A7D88C604C32A87BD757786977387E2EF8E37AF3B469715617FD2915C6D371CF2',
        'X-Trkd-Auth-ApplicationID': 'VectorTrkdVectorCom',
        Host: 'api.trkd.thomsonreuters.com',
        'Content-Length': '12112',
      },
      body: JSON.stringify({
        GetChart_Request_2: {
          chartRequest: {
            TimeSeries: {
              TimeSeriesRequest_typehint: ['TimeSeriesRequest'],
              TimeSeriesRequest: [
                {
                  Symbol: emisora,
                  Reference: 'd1',
                },
              ],
            },
            Analyses: {
              Analysis_typehint: ['Analysis', 'Analysis'],
              Analysis: [
                {
                  Reference: 'a1',
                  OHLC: {
                    Instrument1: {
                      Reference: 'd1',
                    },
                  },
                },
                {
                  Reference: 'a2',
                  Vol: {
                    Instrument1: {
                      Reference: 'd1',
                    },
                  },
                },
              ],
            },
            StandardTemplate: {
              Title: {
                Caption: {
                  Visible: true,
                  Customized: false,
                },
                Range: {
                  Visible: true,
                },
              },
              Legend: {
                Visible: true,
                Information: 'Long',
                Layout: 'MultiLine',
                Position: 'Overlaid',
              },
              Instrument: 'Symbol',
              Delimiter: '%',
              GridLines: 'None',
              YAxisMarkers: 'None',
              Interval: {
                CommonType: 'Days',
                Multiplier: '1',
              },
              ShowNonTradedPeriods: false,
              ShowHolidays: false,
              ShowGaps: true,
              XAxis: {
                Visible: true,
                Position: 'Bottom',
                Range: {
                  Fixed: {
                    First: '2020-05-06T00:00:00',
                    Last: '2021-05-06T00:00:00',
                  },
                },
              },
              Subchart: [
                {
                  Weight: 5.0,
                  YAxis: [
                    {
                      Visible: true,
                      Position: 'Right',
                      Invert: false,
                      Logarithmic: false,
                      Display: {
                        Mode: 'Automatic',
                      },
                      Range: {
                        Automatic: '',
                      },
                      Analysis: [
                        {
                          Reference: 'a1',
                        },
                      ],
                    },
                  ],
                },
                {
                  Weight: 2.0,
                  YAxis: [
                    {
                      Visible: true,
                      Position: 'Right',
                      Invert: false,
                      Logarithmic: false,
                      Display: {
                        Mode: 'Automatic',
                      },
                      Range: {
                        Automatic: '',
                      },
                      Analysis: [
                        {
                          Reference: 'a2',
                        },
                      ],
                    },
                  ],
                },
              ],
              YAxisTitles: 'All',
              Brand: 'None',
            },
            Scheme: {
              Background: {
                BackgroundMode: 'Solid',
                StartColor: {
                  Named: 'White',
                },
                EndColor: {
                  Named: 'White',
                },
                HatchStyle: 'LargeGrid',
                GradientMode: 'ForwardDiagonal',
                ImageMode: 'Centered',
              },
              Border: {
                Color: {
                  RGB: '139;139;155',
                },
                DashStyle: 'Solid',
                Width: 1.0,
              },
              GridLines: {
                Color: {
                  RGB: '139;139;155',
                },
                DashStyle: 'Dot',
                Width: 1.0,
              },
              Title: {
                Caption: {
                  Color: {
                    Named: 'Black',
                  },
                  Family: 'Arial',
                  Style: 'Bold',
                  Size: 12.0,
                },
                Range: {
                  Color: {
                    Named: 'Black',
                  },
                  Family: 'Arial',
                  Style: 'Regular',
                  Size: 8.25,
                },
              },
              Legend: {
                Color: {
                  Named: 'Black',
                },
                Family: 'Arial',
                Style: 'Regular',
                Size: 8.25,
              },
              XAxis: {
                Major: {
                  Color: {
                    Named: 'Black',
                  },
                  Family: 'Arial',
                  Style: 'Bold',
                  Size: 9.75,
                },
                Minor: {
                  Color: {
                    Named: 'Black',
                  },
                  Family: 'Arial',
                  Style: 'Regular',
                  Size: 8.25,
                },
              },
              YAxis: {
                Major: {
                  Color: {
                    Named: 'Black',
                  },
                  Family: 'Arial',
                  Style: 'Bold',
                  Size: 9.75,
                },
                Minor: {
                  Color: {
                    Named: 'Black',
                  },
                  Family: 'Arial',
                  Style: 'Regular',
                  Size: 8.25,
                },
                Title: {
                  Color: {
                    Named: 'Black',
                  },
                  Family: 'Arial',
                  Style: 'Regular',
                  Size: 8.25,
                },
              },
              Series: [
                {
                  Color: {
                    Named: 'Black',
                  },
                  DashStyle: 'Solid',
                  Width: 0.0,
                  FillColor: {
                    Named: 'Black',
                  },
                  FillStyle: 'Percent20',
                },
                {
                  Color: {
                    Named: 'Red',
                  },
                  DashStyle: 'Solid',
                  Width: 0.0,
                  FillColor: {
                    Named: 'Red',
                  },
                  FillStyle: 'Percent20',
                },
                {
                  Color: {
                    RGB: '62;169;0',
                  },
                  DashStyle: 'Solid',
                  Width: 0.0,
                  FillColor: {
                    RGB: '62;169;0',
                  },
                  FillStyle: 'Percent20',
                },
                {
                  Color: {
                    RGB: '156;38;115',
                  },
                  DashStyle: 'Solid',
                  Width: 0.0,
                  FillColor: {
                    RGB: '156;38;115',
                  },
                  FillStyle: 'Percent20',
                },
                {
                  Color: {
                    RGB: '255;120;0',
                  },
                  DashStyle: 'Solid',
                  Width: 0.0,
                  FillColor: {
                    RGB: '255;120;0',
                  },
                  FillStyle: 'Percent20',
                },
                {
                  Color: {
                    RGB: '25;108;229',
                  },
                  DashStyle: 'Solid',
                  Width: 0.0,
                  FillColor: {
                    RGB: '25;108;229',
                  },
                  FillStyle: 'Percent20',
                },
                {
                  Color: {
                    RGB: '60;117;28',
                  },
                  DashStyle: 'Solid',
                  Width: 0.0,
                  FillColor: {
                    RGB: '60;117;28',
                  },
                  FillStyle: 'Percent20',
                },
                {
                  Color: {
                    RGB: '230;176;18',
                  },
                  DashStyle: 'Solid',
                  Width: 0.0,
                  FillColor: {
                    RGB: '230;176;18',
                  },
                  FillStyle: 'Percent20',
                },
                {
                  Color: {
                    RGB: '0;186;193',
                  },
                  DashStyle: 'Solid',
                  Width: 0.0,
                  FillColor: {
                    RGB: '0;186;193',
                  },
                  FillStyle: 'Percent20',
                },
                {
                  Color: {
                    RGB: '255;178;127',
                  },
                  DashStyle: 'Solid',
                  Width: 0.0,
                  FillColor: {
                    RGB: '255;178;127',
                  },
                  FillStyle: 'Percent20',
                },
                {
                  Color: {
                    RGB: '100;79;190',
                  },
                  DashStyle: 'Solid',
                  Width: 0.0,
                  FillColor: {
                    RGB: '100;79;190',
                  },
                  FillStyle: 'Percent20',
                },
                {
                  Color: {
                    RGB: '209;36;33',
                  },
                  DashStyle: 'Solid',
                  Width: 0.0,
                  FillColor: {
                    RGB: '209;36;33',
                  },
                  FillStyle: 'Percent20',
                },
                {
                  Color: {
                    RGB: '38;87;135',
                  },
                  DashStyle: 'Solid',
                  Width: 0.0,
                  FillColor: {
                    RGB: '38;87;135',
                  },
                  FillStyle: 'Percent20',
                },
                {
                  Color: {
                    RGB: '94;176;176',
                  },
                  DashStyle: 'Solid',
                  Width: 0.0,
                  FillColor: {
                    RGB: '94;176;176',
                  },
                  FillStyle: 'Percent20',
                },
              ],
              LevelLine: [
                {
                  Color: {
                    RGB: '0;0;153',
                  },
                  DashStyle: 'Solid',
                  Width: 1.0,
                },
                {
                  Color: {
                    RGB: '120;120;120',
                  },
                  DashStyle: 'Solid',
                  Width: 1.0,
                },
              ],
            },
            ImageType: 'PNG',
            Width: 900,
            Height: 400,
            Culture: 'en-US',
            ReturnPrivateNetworkURL: false,
          },
        },
      }),
    }
  );
  if (!response.ok) {
    put(setChartFailure('Something went wrong!'));
  }
  const resData = yield response.json();
  yield put(
    setChartSuccess(resData.GetChart_Response_2.ChartImageResult.SecureUrl)
  );
}

export function* onsetChartStart() {
  yield takeLatest(ChartActionTypes.SET_CHART_START, fetchChart);
}

export function* chartSagas() {
  yield all([call(onsetChartStart)]);
}
