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
 * 200 ok object
 * @export
 * @interface GetCharactersCharacterIdOrders200Ok
 */
export interface GetCharactersCharacterIdOrders200Ok {
    /**
     * Number of days for which order is valid (starting from the issued date). An order expires at time issued + duration
     * @type {number}
     * @memberof GetCharactersCharacterIdOrders200Ok
     */
    duration: number;
    /**
     * For buy orders, the amount of ISK in escrow
     * @type {number}
     * @memberof GetCharactersCharacterIdOrders200Ok
     */
    escrow?: number;
    /**
     * True if the order is a bid (buy) order
     * @type {boolean}
     * @memberof GetCharactersCharacterIdOrders200Ok
     */
    isBuyOrder?: boolean;
    /**
     * Signifies whether the buy/sell order was placed on behalf of a corporation.
     * @type {boolean}
     * @memberof GetCharactersCharacterIdOrders200Ok
     */
    isCorporation: boolean;
    /**
     * Date and time when this order was issued
     * @type {Date}
     * @memberof GetCharactersCharacterIdOrders200Ok
     */
    issued: Date;
    /**
     * ID of the location where order was placed
     * @type {number}
     * @memberof GetCharactersCharacterIdOrders200Ok
     */
    locationId: number;
    /**
     * For buy orders, the minimum quantity that will be accepted in a matching sell order
     * @type {number}
     * @memberof GetCharactersCharacterIdOrders200Ok
     */
    minVolume?: number;
    /**
     * Unique order ID
     * @type {number}
     * @memberof GetCharactersCharacterIdOrders200Ok
     */
    orderId: number;
    /**
     * Cost per unit for this order
     * @type {number}
     * @memberof GetCharactersCharacterIdOrders200Ok
     */
    price: number;
    /**
     * Valid order range, numbers are ranges in jumps
     * @type {string}
     * @memberof GetCharactersCharacterIdOrders200Ok
     */
    range: GetCharactersCharacterIdOrders200OkRangeEnum;
    /**
     * ID of the region where order was placed
     * @type {number}
     * @memberof GetCharactersCharacterIdOrders200Ok
     */
    regionId: number;
    /**
     * The type ID of the item transacted in this order
     * @type {number}
     * @memberof GetCharactersCharacterIdOrders200Ok
     */
    typeId: number;
    /**
     * Quantity of items still required or offered
     * @type {number}
     * @memberof GetCharactersCharacterIdOrders200Ok
     */
    volumeRemain: number;
    /**
     * Quantity of items required or offered at time order was placed
     * @type {number}
     * @memberof GetCharactersCharacterIdOrders200Ok
     */
    volumeTotal: number;
}


/**
 * @export
 */
export const GetCharactersCharacterIdOrders200OkRangeEnum = {
    _1: '1',
    _10: '10',
    _2: '2',
    _20: '20',
    _3: '3',
    _30: '30',
    _4: '4',
    _40: '40',
    _5: '5',
    Region: 'region',
    Solarsystem: 'solarsystem',
    Station: 'station'
} as const;
export type GetCharactersCharacterIdOrders200OkRangeEnum = typeof GetCharactersCharacterIdOrders200OkRangeEnum[keyof typeof GetCharactersCharacterIdOrders200OkRangeEnum];


/**
 * Check if a given object implements the GetCharactersCharacterIdOrders200Ok interface.
 */
export function instanceOfGetCharactersCharacterIdOrders200Ok(value: object): value is GetCharactersCharacterIdOrders200Ok {
    if (!('duration' in value) || value['duration'] === undefined) return false;
    if (!('isCorporation' in value) || value['isCorporation'] === undefined) return false;
    if (!('issued' in value) || value['issued'] === undefined) return false;
    if (!('locationId' in value) || value['locationId'] === undefined) return false;
    if (!('orderId' in value) || value['orderId'] === undefined) return false;
    if (!('price' in value) || value['price'] === undefined) return false;
    if (!('range' in value) || value['range'] === undefined) return false;
    if (!('regionId' in value) || value['regionId'] === undefined) return false;
    if (!('typeId' in value) || value['typeId'] === undefined) return false;
    if (!('volumeRemain' in value) || value['volumeRemain'] === undefined) return false;
    if (!('volumeTotal' in value) || value['volumeTotal'] === undefined) return false;
    return true;
}

export function GetCharactersCharacterIdOrders200OkFromJSON(json: any): GetCharactersCharacterIdOrders200Ok {
    return GetCharactersCharacterIdOrders200OkFromJSONTyped(json, false);
}

export function GetCharactersCharacterIdOrders200OkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCharactersCharacterIdOrders200Ok {
    if (json == null) {
        return json;
    }
    return {
        
        'duration': json['duration'],
        'escrow': json['escrow'] == null ? undefined : json['escrow'],
        'isBuyOrder': json['is_buy_order'] == null ? undefined : json['is_buy_order'],
        'isCorporation': json['is_corporation'],
        'issued': (new Date(json['issued'])),
        'locationId': json['location_id'],
        'minVolume': json['min_volume'] == null ? undefined : json['min_volume'],
        'orderId': json['order_id'],
        'price': json['price'],
        'range': json['range'],
        'regionId': json['region_id'],
        'typeId': json['type_id'],
        'volumeRemain': json['volume_remain'],
        'volumeTotal': json['volume_total'],
    };
}

export function GetCharactersCharacterIdOrders200OkToJSON(json: any): GetCharactersCharacterIdOrders200Ok {
    return GetCharactersCharacterIdOrders200OkToJSONTyped(json, false);
}

export function GetCharactersCharacterIdOrders200OkToJSONTyped(value?: GetCharactersCharacterIdOrders200Ok | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'duration': value['duration'],
        'escrow': value['escrow'],
        'is_buy_order': value['isBuyOrder'],
        'is_corporation': value['isCorporation'],
        'issued': ((value['issued']).toISOString()),
        'location_id': value['locationId'],
        'min_volume': value['minVolume'],
        'order_id': value['orderId'],
        'price': value['price'],
        'range': value['range'],
        'region_id': value['regionId'],
        'type_id': value['typeId'],
        'volume_remain': value['volumeRemain'],
        'volume_total': value['volumeTotal'],
    };
}

