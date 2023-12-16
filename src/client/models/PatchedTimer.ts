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
import type { ProjectRead } from './ProjectRead';
import {
    ProjectReadFromJSON,
    ProjectReadFromJSONTyped,
    ProjectReadToJSON,
} from './ProjectRead';

/**
 * 
 * @export
 * @interface PatchedTimer
 */
export interface PatchedTimer {
    /**
     * 
     * @type {string}
     * @memberof PatchedTimer
     */
    readonly url?: string;
    /**
     * 
     * @type {number}
     * @memberof PatchedTimer
     */
    readonly timesince?: number;
    /**
     * 
     * @type {ProjectRead}
     * @memberof PatchedTimer
     */
    project?: ProjectRead;
    /**
     * 
     * @type {Date}
     * @memberof PatchedTimer
     */
    readonly startDatetime?: Date;
    /**
     * 
     * @type {Date}
     * @memberof PatchedTimer
     */
    readonly endDatetime?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedTimer
     */
    note?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedTimer
     */
    readonly duration?: string | null;
}

/**
 * Check if a given object implements the PatchedTimer interface.
 */
export function instanceOfPatchedTimer(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PatchedTimerFromJSON(json: any): PatchedTimer {
    return PatchedTimerFromJSONTyped(json, false);
}

export function PatchedTimerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedTimer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': !exists(json, 'url') ? undefined : json['url'],
        'timesince': !exists(json, 'timesince') ? undefined : json['timesince'],
        'project': !exists(json, 'project') ? undefined : ProjectReadFromJSON(json['project']),
        'startDatetime': !exists(json, 'start_datetime') ? undefined : (new Date(json['start_datetime'])),
        'endDatetime': !exists(json, 'end_datetime') ? undefined : (json['end_datetime'] === null ? null : new Date(json['end_datetime'])),
        'note': !exists(json, 'note') ? undefined : json['note'],
        'duration': !exists(json, 'duration') ? undefined : json['duration'],
    };
}

export function PatchedTimerToJSON(value?: PatchedTimer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'project': ProjectReadToJSON(value.project),
        'note': value.note,
    };
}

