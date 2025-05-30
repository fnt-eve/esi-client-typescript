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
 * agent object
 * @export
 * @interface PostUniverseIdsAgent
 */
export interface PostUniverseIdsAgent {
    /**
     * id integer
     * @type {number}
     * @memberof PostUniverseIdsAgent
     */
    id?: number;
    /**
     * name string
     * @type {string}
     * @memberof PostUniverseIdsAgent
     */
    name?: string;
}

/**
 * Check if a given object implements the PostUniverseIdsAgent interface.
 */
export function instanceOfPostUniverseIdsAgent(value: object): value is PostUniverseIdsAgent {
    return true;
}

export function PostUniverseIdsAgentFromJSON(json: any): PostUniverseIdsAgent {
    return PostUniverseIdsAgentFromJSONTyped(json, false);
}

export function PostUniverseIdsAgentFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostUniverseIdsAgent {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}

export function PostUniverseIdsAgentToJSON(json: any): PostUniverseIdsAgent {
    return PostUniverseIdsAgentToJSONTyped(json, false);
}

export function PostUniverseIdsAgentToJSONTyped(value?: PostUniverseIdsAgent | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
    };
}

