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
 * Not found
 * @export
 * @interface PostFleetsFleetIdWingsWingIdSquadsNotFound
 */
export interface PostFleetsFleetIdWingsWingIdSquadsNotFound {
    /**
     * Not found message
     * @type {string}
     * @memberof PostFleetsFleetIdWingsWingIdSquadsNotFound
     */
    error?: string;
}

/**
 * Check if a given object implements the PostFleetsFleetIdWingsWingIdSquadsNotFound interface.
 */
export function instanceOfPostFleetsFleetIdWingsWingIdSquadsNotFound(value: object): value is PostFleetsFleetIdWingsWingIdSquadsNotFound {
    return true;
}

export function PostFleetsFleetIdWingsWingIdSquadsNotFoundFromJSON(json: any): PostFleetsFleetIdWingsWingIdSquadsNotFound {
    return PostFleetsFleetIdWingsWingIdSquadsNotFoundFromJSONTyped(json, false);
}

export function PostFleetsFleetIdWingsWingIdSquadsNotFoundFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostFleetsFleetIdWingsWingIdSquadsNotFound {
    if (json == null) {
        return json;
    }
    return {
        
        'error': json['error'] == null ? undefined : json['error'],
    };
}

export function PostFleetsFleetIdWingsWingIdSquadsNotFoundToJSON(json: any): PostFleetsFleetIdWingsWingIdSquadsNotFound {
    return PostFleetsFleetIdWingsWingIdSquadsNotFoundToJSONTyped(json, false);
}

export function PostFleetsFleetIdWingsWingIdSquadsNotFoundToJSONTyped(value?: PostFleetsFleetIdWingsWingIdSquadsNotFound | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'error': value['error'],
    };
}

