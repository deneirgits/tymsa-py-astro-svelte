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
 * @interface PatchedTimerUpdate
 */
export interface PatchedTimerUpdate {
    /**
     * 
     * @type {number}
     * @memberof PatchedTimerUpdate
     */
    readonly id?: number;
    /**
     * 
     * @type {Date}
     * @memberof PatchedTimerUpdate
     */
    startDatetime?: Date;
    /**
     * 
     * @type {Date}
     * @memberof PatchedTimerUpdate
     */
    endDatetime?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedTimerUpdate
     */
    note?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedTimerUpdate
     */
    readonly duration?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PatchedTimerUpdate
     */
    project?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PatchedTimerUpdate
     */
    previous?: number | null;
}

/**
 * Check if a given object implements the PatchedTimerUpdate interface.
 */
export function instanceOfPatchedTimerUpdate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PatchedTimerUpdateFromJSON(json: any): PatchedTimerUpdate {
    return PatchedTimerUpdateFromJSONTyped(json, false);
}

export function PatchedTimerUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedTimerUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'startDatetime': !exists(json, 'start_datetime') ? undefined : (new Date(json['start_datetime'])),
        'endDatetime': !exists(json, 'end_datetime') ? undefined : (json['end_datetime'] === null ? null : new Date(json['end_datetime'])),
        'note': !exists(json, 'note') ? undefined : json['note'],
        'duration': !exists(json, 'duration') ? undefined : json['duration'],
        'project': !exists(json, 'project') ? undefined : json['project'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
    };
}

export function PatchedTimerUpdateToJSON(value?: PatchedTimerUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'start_datetime': value.startDatetime === undefined ? undefined : (value.startDatetime.toISOString()),
        'end_datetime': value.endDatetime === undefined ? undefined : (value.endDatetime === null ? null : value.endDatetime.toISOString()),
        'note': value.note,
        'project': value.project,
        'previous': value.previous,
    };
}

