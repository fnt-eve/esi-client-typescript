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
 * cost_indice object
 * @export
 * @interface GetIndustrySystemsCostIndice
 */
export interface GetIndustrySystemsCostIndice {
    /**
     * activity string
     * @type {string}
     * @memberof GetIndustrySystemsCostIndice
     */
    activity: GetIndustrySystemsCostIndiceActivityEnum;
    /**
     * cost_index number
     * @type {number}
     * @memberof GetIndustrySystemsCostIndice
     */
    costIndex: number;
}


/**
 * @export
 */
export const GetIndustrySystemsCostIndiceActivityEnum = {
    Copying: 'copying',
    Duplicating: 'duplicating',
    Invention: 'invention',
    Manufacturing: 'manufacturing',
    None: 'none',
    Reaction: 'reaction',
    ResearchingMaterialEfficiency: 'researching_material_efficiency',
    ResearchingTechnology: 'researching_technology',
    ResearchingTimeEfficiency: 'researching_time_efficiency',
    ReverseEngineering: 'reverse_engineering'
} as const;
export type GetIndustrySystemsCostIndiceActivityEnum = typeof GetIndustrySystemsCostIndiceActivityEnum[keyof typeof GetIndustrySystemsCostIndiceActivityEnum];


/**
 * Check if a given object implements the GetIndustrySystemsCostIndice interface.
 */
export function instanceOfGetIndustrySystemsCostIndice(value: object): value is GetIndustrySystemsCostIndice {
    if (!('activity' in value) || value['activity'] === undefined) return false;
    if (!('costIndex' in value) || value['costIndex'] === undefined) return false;
    return true;
}

export function GetIndustrySystemsCostIndiceFromJSON(json: any): GetIndustrySystemsCostIndice {
    return GetIndustrySystemsCostIndiceFromJSONTyped(json, false);
}

export function GetIndustrySystemsCostIndiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetIndustrySystemsCostIndice {
    if (json == null) {
        return json;
    }
    return {
        
        'activity': json['activity'],
        'costIndex': json['cost_index'],
    };
}

export function GetIndustrySystemsCostIndiceToJSON(json: any): GetIndustrySystemsCostIndice {
    return GetIndustrySystemsCostIndiceToJSONTyped(json, false);
}

export function GetIndustrySystemsCostIndiceToJSONTyped(value?: GetIndustrySystemsCostIndice | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'activity': value['activity'],
        'cost_index': value['costIndex'],
    };
}

