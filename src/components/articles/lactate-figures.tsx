'use client'

import { LactateCurveChart } from '@runaid/lactate-curve'

const ZONES = [
  {
    startIntensity: 'min' as const,
    endIntensity: 'lt1' as const,
    label: 'Easy',
    color: '#22c55e',
    opacity: 0.15,
  },
  {
    startIntensity: 'lt1' as const,
    endIntensity: 'lt2' as const,
    label: 'Moderate',
    color: '#f59e0b',
    opacity: 0.15,
  },
  {
    startIntensity: 'lt2' as const,
    endIntensity: 'max' as const,
    label: 'Severe',
    color: '#ef4444',
    opacity: 0.15,
  },
]

const BASE_PROPS = {
  baselineLactate: 1.8,
  lt1: { intensity: 12.5, lactate: 1.7 },
  lt2: { intensity: 15.5, lactate: 4.0 },
  yAxisLabel: 'Blood lactate (mmol/L)',
  xAxisPrecision: 1,
  intensityStep: 0.5,
  xAxisMax: 18,
  xAxisCompression: { endIntensity: 'lt1' as const, scale: 0.45 },
  xAxisCompressionNote: 'The X axis is compressed below LT1 for visual clarity',
  showHeader: false,
  theme: {
    curveColor: '#006972',
    thresholdColor: '#000a1e',
    backgroundColor: '#ffffff',
    labelColor: '#191c1d',
    axisColor: '#44474e',
    gridColor: '#e1e3e4',
  },
}

const VO2MAX = { intensity: 17.5 }

/** Figure 1: The basic lactate curve with LT1 and LT2 annotated. No zones, no VO2max. */
export function LactateFigure1() {
  return (
    <div className="my-8 not-italic">
      <LactateCurveChart
        {...BASE_PROPS}
        xAxisLabel="Intensity (e.g. pace or power)"
        showXAxisTicks={false}
        zones={[]}
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
        xAxisLabel="Intensity (km/h)"
        vo2max={VO2MAX}
        zones={ZONES}
        labels={{ lt1: 'LT1', lt2: 'LT2', vo2max: 'VO₂max' }}
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
        vo2max={VO2MAX}
        zones={ZONES}
        raceMarkers={[
          { intensity: 14, label: 'Marathon' },
          { intensity: 15, label: 'Half marathon' },
          { intensity: 16, label: '10k' },
          { intensity: 16.6, label: '5k' },
          { intensity: 17.2, label: '3k' },
        ]}
        labels={{ lt1: 'LT1', lt2: 'LT2', vo2max: 'VO₂max' }}
        showLegend
      />
    </div>
  )
}
