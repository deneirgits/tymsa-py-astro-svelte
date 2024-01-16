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
import type { Project } from './Project';
import {
    ProjectFromJSON,
    ProjectFromJSONTyped,
    ProjectToJSON,
} from './Project';

/**
 * 
 * @export
 * @interface PreviousTimer
 */
export interface PreviousTimer {
    /**
     * 
     * @type {number}
     * @memberof PreviousTimer
     */
    readonly id: number;
    /**
     * 
     * @type {Project}
     * @memberof PreviousTimer
     */
    project: Project;
    /**
     * 
     * @type {Date}
     * @memberof PreviousTimer
     */
    readonly startDatetime: Date;
    /**
     * 
     * @type {Date}
     * @memberof PreviousTimer
     */
    readonly endDatetime: Date | null;
    /**
     * 
     * @type {number}
     * @memberof PreviousTimer
     */
    readonly timesince: number;
    /**
     * 
     * @type {string}
     * @memberof PreviousTimer
     */
    readonly note: string;
}

/**
 * Check if a given object implements the PreviousTimer interface.
 */
export function instanceOfPreviousTimer(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "project" in value;
    isInstance = isInstance && "startDatetime" in value;
    isInstance = isInstance && "endDatetime" in value;
    isInstance = isInstance && "timesince" in value;
    isInstance = isInstance && "note" in value;

    return isInstance;
}

export function PreviousTimerFromJSON(json: any): PreviousTimer {
    return PreviousTimerFromJSONTyped(json, false);
}

export function PreviousTimerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PreviousTimer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'project': ProjectFromJSON(json['project']),
        'startDatetime': (new Date(json['start_datetime'])),
        'endDatetime': (json['end_datetime'] === null ? null : new Date(json['end_datetime'])),
        'timesince': json['timesince'],
        'note': json['note'],
    };
}

export function PreviousTimerToJSON(value?: PreviousTimer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'project': ProjectToJSON(value.project),
    };
}

