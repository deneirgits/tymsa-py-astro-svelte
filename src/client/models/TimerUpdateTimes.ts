/* tslint:disable */
/* eslint-disable */
/**
 * Tymsa API
 * API for Tymsa time-tracking
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TimerUpdateTimes
 */
export interface TimerUpdateTimes {
    /**
     * 
     * @type {Date}
     * @memberof TimerUpdateTimes
     */
    readonly startDatetime: Date;
    /**
     * 
     * @type {Date}
     * @memberof TimerUpdateTimes
     */
    endDatetime?: Date | null;
}

/**
 * Check if a given object implements the TimerUpdateTimes interface.
 */
export function instanceOfTimerUpdateTimes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "startDatetime" in value;

    return isInstance;
}

export function TimerUpdateTimesFromJSON(json: any): TimerUpdateTimes {
    return TimerUpdateTimesFromJSONTyped(json, false);
}

export function TimerUpdateTimesFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimerUpdateTimes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'startDatetime': (new Date(json['start_datetime'])),
        'endDatetime': !exists(json, 'end_datetime') ? undefined : (json['end_datetime'] === null ? null : new Date(json['end_datetime'])),
    };
}

export function TimerUpdateTimesToJSON(value?: TimerUpdateTimes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'end_datetime': value.endDatetime === undefined ? undefined : (value.endDatetime === null ? null : value.endDatetime.toISOString()),
    };
}

