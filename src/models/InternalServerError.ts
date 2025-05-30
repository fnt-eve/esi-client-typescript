/* tslint:disable */
/* eslint-disable */
/**
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * The version of the OpenAPI document: 1.33
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Internal server error model
 * @export
 * @interface InternalServerError
 */
export interface InternalServerError {
    /**
     * Internal server error message
     * @type {string}
     * @memberof InternalServerError
     */
    error: string;
}

/**
 * Check if a given object implements the InternalServerError interface.
 */
export function instanceOfInternalServerError(value: object): value is InternalServerError {
    if (!('error' in value) || value['error'] === undefined) return false;
    return true;
}

export function InternalServerErrorFromJSON(json: any): InternalServerError {
    return InternalServerErrorFromJSONTyped(json, false);
}

export function InternalServerErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): InternalServerError {
    if (json == null) {
        return json;
    }
    return {
        
        'error': json['error'],
    };
}

export function InternalServerErrorToJSON(json: any): InternalServerError {
    return InternalServerErrorToJSONTyped(json, false);
}

export function InternalServerErrorToJSONTyped(value?: InternalServerError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'error': value['error'],
    };
}

