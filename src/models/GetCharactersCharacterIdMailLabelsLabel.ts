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
 * label object
 * @export
 * @interface GetCharactersCharacterIdMailLabelsLabel
 */
export interface GetCharactersCharacterIdMailLabelsLabel {
    /**
     * color string
     * @type {string}
     * @memberof GetCharactersCharacterIdMailLabelsLabel
     */
    color?: GetCharactersCharacterIdMailLabelsLabelColorEnum;
    /**
     * label_id integer
     * @type {number}
     * @memberof GetCharactersCharacterIdMailLabelsLabel
     */
    labelId?: number;
    /**
     * name string
     * @type {string}
     * @memberof GetCharactersCharacterIdMailLabelsLabel
     */
    name?: string;
    /**
     * unread_count integer
     * @type {number}
     * @memberof GetCharactersCharacterIdMailLabelsLabel
     */
    unreadCount?: number;
}


/**
 * @export
 */
export const GetCharactersCharacterIdMailLabelsLabelColorEnum = {
    _0000fe: '#0000fe',
    _006634: '#006634',
    _0099ff: '#0099ff',
    _00ff33: '#00ff33',
    _01ffff: '#01ffff',
    _349800: '#349800',
    _660066: '#660066',
    _666666: '#666666',
    _999999: '#999999',
    _99ffff: '#99ffff',
    _9a0000: '#9a0000',
    Ccff9a: '#ccff9a',
    E6e6e6: '#e6e6e6',
    Fe0000: '#fe0000',
    Ff6600: '#ff6600',
    Ffff01: '#ffff01',
    Ffffcd: '#ffffcd',
    Ffffff: '#ffffff'
} as const;
export type GetCharactersCharacterIdMailLabelsLabelColorEnum = typeof GetCharactersCharacterIdMailLabelsLabelColorEnum[keyof typeof GetCharactersCharacterIdMailLabelsLabelColorEnum];


/**
 * Check if a given object implements the GetCharactersCharacterIdMailLabelsLabel interface.
 */
export function instanceOfGetCharactersCharacterIdMailLabelsLabel(value: object): value is GetCharactersCharacterIdMailLabelsLabel {
    return true;
}

export function GetCharactersCharacterIdMailLabelsLabelFromJSON(json: any): GetCharactersCharacterIdMailLabelsLabel {
    return GetCharactersCharacterIdMailLabelsLabelFromJSONTyped(json, false);
}

export function GetCharactersCharacterIdMailLabelsLabelFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCharactersCharacterIdMailLabelsLabel {
    if (json == null) {
        return json;
    }
    return {
        
        'color': json['color'] == null ? undefined : json['color'],
        'labelId': json['label_id'] == null ? undefined : json['label_id'],
        'name': json['name'] == null ? undefined : json['name'],
        'unreadCount': json['unread_count'] == null ? undefined : json['unread_count'],
    };
}

export function GetCharactersCharacterIdMailLabelsLabelToJSON(json: any): GetCharactersCharacterIdMailLabelsLabel {
    return GetCharactersCharacterIdMailLabelsLabelToJSONTyped(json, false);
}

export function GetCharactersCharacterIdMailLabelsLabelToJSONTyped(value?: GetCharactersCharacterIdMailLabelsLabel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'color': value['color'],
        'label_id': value['labelId'],
        'name': value['name'],
        'unread_count': value['unreadCount'],
    };
}

