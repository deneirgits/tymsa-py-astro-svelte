/* tslint:disable */
/* eslint-disable */
/**
 * Tymr API
 * API for Tymr time-tracking
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
 * @interface TimerStop
 */
export interface TimerStop {
    /**
     * 
     * @type {number}
     * @memberof TimerStop
     */
    readonly id: number;
    /**
     * 
     * @type {Date}
     * @memberof TimerStop
     */
    readonly startDatetime: Date;
    /**
     * 
     * @type {Date}
     * @memberof TimerStop
     */
    readonly endDatetime: Date | null;
    /**
     * 
     * @type {string}
     * @memberof TimerStop
     */
    readonly note: string;
    /**
     * 
     * @type {string}
     * @memberof TimerStop
     */
    readonly duration: string | null;
    /**
     * 
     * @type {number}
     * @memberof TimerStop
     */
    readonly project: number | null;
}

/**
 * Check if a given object implements the TimerStop interface.
 */
export function instanceOfTimerStop(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "startDatetime" in value;
    isInstance = isInstance && "endDatetime" in value;
    isInstance = isInstance && "note" in value;
    isInstance = isInstance && "duration" in value;
    isInstance = isInstance && "project" in value;

    return isInstance;
}

export function TimerStopFromJSON(json: any): TimerStop {
    return TimerStopFromJSONTyped(json, false);
}

export function TimerStopFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimerStop {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'startDatetime': (new Date(json['start_datetime'])),
        'endDatetime': (json['end_datetime'] === null ? null : new Date(json['end_datetime'])),
        'note': json['note'],
        'duration': json['duration'],
        'project': json['project'],
    };
}

export function TimerStopToJSON(value?: TimerStop | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}

