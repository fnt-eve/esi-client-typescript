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
 * character_id and response of an attendee
 * @export
 * @interface GetCharactersCharacterIdCalendarEventIdAttendees200Ok
 */
export interface GetCharactersCharacterIdCalendarEventIdAttendees200Ok {
    /**
     * character_id integer
     * @type {number}
     * @memberof GetCharactersCharacterIdCalendarEventIdAttendees200Ok
     */
    characterId?: number;
    /**
     * event_response string
     * @type {string}
     * @memberof GetCharactersCharacterIdCalendarEventIdAttendees200Ok
     */
    eventResponse?: GetCharactersCharacterIdCalendarEventIdAttendees200OkEventResponseEnum;
}


/**
 * @export
 */
export const GetCharactersCharacterIdCalendarEventIdAttendees200OkEventResponseEnum = {
    Declined: 'declined',
    NotResponded: 'not_responded',
    Accepted: 'accepted',
    Tentative: 'tentative'
} as const;
export type GetCharactersCharacterIdCalendarEventIdAttendees200OkEventResponseEnum = typeof GetCharactersCharacterIdCalendarEventIdAttendees200OkEventResponseEnum[keyof typeof GetCharactersCharacterIdCalendarEventIdAttendees200OkEventResponseEnum];


/**
 * Check if a given object implements the GetCharactersCharacterIdCalendarEventIdAttendees200Ok interface.
 */
export function instanceOfGetCharactersCharacterIdCalendarEventIdAttendees200Ok(value: object): value is GetCharactersCharacterIdCalendarEventIdAttendees200Ok {
    return true;
}

export function GetCharactersCharacterIdCalendarEventIdAttendees200OkFromJSON(json: any): GetCharactersCharacterIdCalendarEventIdAttendees200Ok {
    return GetCharactersCharacterIdCalendarEventIdAttendees200OkFromJSONTyped(json, false);
}

export function GetCharactersCharacterIdCalendarEventIdAttendees200OkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCharactersCharacterIdCalendarEventIdAttendees200Ok {
    if (json == null) {
        return json;
    }
    return {
        
        'characterId': json['character_id'] == null ? undefined : json['character_id'],
        'eventResponse': json['event_response'] == null ? undefined : json['event_response'],
    };
}

export function GetCharactersCharacterIdCalendarEventIdAttendees200OkToJSON(json: any): GetCharactersCharacterIdCalendarEventIdAttendees200Ok {
    return GetCharactersCharacterIdCalendarEventIdAttendees200OkToJSONTyped(json, false);
}

export function GetCharactersCharacterIdCalendarEventIdAttendees200OkToJSONTyped(value?: GetCharactersCharacterIdCalendarEventIdAttendees200Ok | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'character_id': value['characterId'],
        'event_response': value['eventResponse'],
    };
}

