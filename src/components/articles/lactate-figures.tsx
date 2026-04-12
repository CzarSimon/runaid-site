'use client'

import { LactateCurveChart } from '@runaid/lactate-curve'

const BASE_PROPS = {
  baselineLactate: 1.0,
  lt1: { intensity: 220, lactate: 2.0 },
  lt2: { intensity: 300, lactate: 4.0 },
  vo2max: { intensity: 360 },
  xAxisLabel: 'Intensity',
  yAxisLabel: 'Blood lactate (mmol/L)',
  showXAxisTicks: false,
  xAxisCompression: { endIntensity: 'lt1' as const, scale: 0.34 },
  theme: {
    curveColor: '#006972',
    thresholdColor: '#000a1e',
    backgroundColor: '#ffffff',
    labelColor: '#191c1d',
    axisColor: '#44474e',
    gridColor: '#e1e3e4',
  },
}

/** Figure 1: The basic lactate curve with LT1 and LT2 annotated. */
export function LactateFigure1() {
  return (
    <div className="my-8 not-italic">
      <LactateCurveChart
        {...BASE_PROPS}
        labels={{ lt1: 'LT1', lt2: 'LT2' }}
      />
    </div>
  )
}

/** Figure 2: The three intensity domains — Easy, Moderate, Severe. */
export function LactateFigure2() {
  return (
    <div className="my-8 not-italic">
      <LactateCurveChart
        {...BASE_PROPS}
        zones={[
          {
            startIntensity: 'min',
            endIntensity: 'lt1',
            label: 'Easy',
            color: '#22c55e',
            opacity: 0.15,
          },
          {
            startIntensity: 'lt1',
            endIntensity: 'lt2',
            label: 'Moderate',
            color: '#f59e0b',
            opacity: 0.15,
          },
          {
            startIntensity: 'lt2',
            endIntensity: 'max',
            label: 'Severe',
            color: '#ef4444',
            opacity: 0.15,
          },
        ]}
        labels={{ lt1: 'LT1', lt2: 'LT2' }}
        showLegend
      />
    </div>
  )
}

/** Figure 3: Race distances mapped onto the curve. */
export function LactateFigure3() {
  return (
    <div className="my-8 not-italic">
      <LactateCurveChart
        {...BASE_PROPS}
        raceMarkers={[
          { intensity: 250, label: 'Marathon' },
          { intensity: 295, label: 'Half marathon' },
          { intensity: 310, label: '10k' },
          { intensity: 330, label: '5k' },
          { intensity: 345, label: '3k' },
        ]}
        labels={{ lt1: 'LT1', lt2: 'LT2' }}
        showLegend
      />
    </div>
  )
}
