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
 * Schematic not found
 * @export
 * @interface GetUniverseSchematicsSchematicIdNotFound
 */
export interface GetUniverseSchematicsSchematicIdNotFound {
    /**
     * error message
     * @type {string}
     * @memberof GetUniverseSchematicsSchematicIdNotFound
     */
    error?: string;
}

/**
 * Check if a given object implements the GetUniverseSchematicsSchematicIdNotFound interface.
 */
export function instanceOfGetUniverseSchematicsSchematicIdNotFound(value: object): value is GetUniverseSchematicsSchematicIdNotFound {
    return true;
}

export function GetUniverseSchematicsSchematicIdNotFoundFromJSON(json: any): GetUniverseSchematicsSchematicIdNotFound {
    return GetUniverseSchematicsSchematicIdNotFoundFromJSONTyped(json, false);
}

export function GetUniverseSchematicsSchematicIdNotFoundFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetUniverseSchematicsSchematicIdNotFound {
    if (json == null) {
        return json;
    }
    return {
        
        'error': json['error'] == null ? undefined : json['error'],
    };
}

export function GetUniverseSchematicsSchematicIdNotFoundToJSON(json: any): GetUniverseSchematicsSchematicIdNotFound {
    return GetUniverseSchematicsSchematicIdNotFoundToJSONTyped(json, false);
}

export function GetUniverseSchematicsSchematicIdNotFoundToJSONTyped(value?: GetUniverseSchematicsSchematicIdNotFound | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'error': value['error'],
    };
}

