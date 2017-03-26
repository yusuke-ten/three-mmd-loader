import * as _THREE from 'three' // Type reference
const THREE: typeof _THREE = ((function () { return this })().THREE || require('three')) as typeof _THREE

export default class NumberKeyframeTrackEx extends THREE.NumberKeyframeTrack{
    TimeBufferType: typeof Float64Array = Float64Array;

    constructor( name, times, values, interpolationParameterArray ) {
        super( name, times, values );
        this.interpolationParameters = new Float32Array( interpolationParameterArray );
    }

    InterpolantFactoryMethodCubicBezier( result ) {
        return new THREE.MMDLoader.CubicBezierInterpolation( this.times, this.values, this.getValueSize(), result, this.interpolationParameters );
    }

    setInterpolation( interpolation ) {
        this.createInterpolant = this.InterpolantFactoryMethodCubicBezier;
    }
}