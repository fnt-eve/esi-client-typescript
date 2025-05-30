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
import type { PostUniverseIdsInventoryType } from './PostUniverseIdsInventoryType';
import {
    PostUniverseIdsInventoryTypeFromJSON,
    PostUniverseIdsInventoryTypeFromJSONTyped,
    PostUniverseIdsInventoryTypeToJSON,
    PostUniverseIdsInventoryTypeToJSONTyped,
} from './PostUniverseIdsInventoryType';
import type { PostUniverseIdsAlliance } from './PostUniverseIdsAlliance';
import {
    PostUniverseIdsAllianceFromJSON,
    PostUniverseIdsAllianceFromJSONTyped,
    PostUniverseIdsAllianceToJSON,
    PostUniverseIdsAllianceToJSONTyped,
} from './PostUniverseIdsAlliance';
import type { PostUniverseIdsStation } from './PostUniverseIdsStation';
import {
    PostUniverseIdsStationFromJSON,
    PostUniverseIdsStationFromJSONTyped,
    PostUniverseIdsStationToJSON,
    PostUniverseIdsStationToJSONTyped,
} from './PostUniverseIdsStation';
import type { PostUniverseIdsCharacter } from './PostUniverseIdsCharacter';
import {
    PostUniverseIdsCharacterFromJSON,
    PostUniverseIdsCharacterFromJSONTyped,
    PostUniverseIdsCharacterToJSON,
    PostUniverseIdsCharacterToJSONTyped,
} from './PostUniverseIdsCharacter';
import type { PostUniverseIdsCorporation } from './PostUniverseIdsCorporation';
import {
    PostUniverseIdsCorporationFromJSON,
    PostUniverseIdsCorporationFromJSONTyped,
    PostUniverseIdsCorporationToJSON,
    PostUniverseIdsCorporationToJSONTyped,
} from './PostUniverseIdsCorporation';
import type { PostUniverseIdsSystem } from './PostUniverseIdsSystem';
import {
    PostUniverseIdsSystemFromJSON,
    PostUniverseIdsSystemFromJSONTyped,
    PostUniverseIdsSystemToJSON,
    PostUniverseIdsSystemToJSONTyped,
} from './PostUniverseIdsSystem';
import type { PostUniverseIdsConstellation } from './PostUniverseIdsConstellation';
import {
    PostUniverseIdsConstellationFromJSON,
    PostUniverseIdsConstellationFromJSONTyped,
    PostUniverseIdsConstellationToJSON,
    PostUniverseIdsConstellationToJSONTyped,
} from './PostUniverseIdsConstellation';
import type { PostUniverseIdsRegion } from './PostUniverseIdsRegion';
import {
    PostUniverseIdsRegionFromJSON,
    PostUniverseIdsRegionFromJSONTyped,
    PostUniverseIdsRegionToJSON,
    PostUniverseIdsRegionToJSONTyped,
} from './PostUniverseIdsRegion';
import type { PostUniverseIdsFaction } from './PostUniverseIdsFaction';
import {
    PostUniverseIdsFactionFromJSON,
    PostUniverseIdsFactionFromJSONTyped,
    PostUniverseIdsFactionToJSON,
    PostUniverseIdsFactionToJSONTyped,
} from './PostUniverseIdsFaction';
import type { PostUniverseIdsAgent } from './PostUniverseIdsAgent';
import {
    PostUniverseIdsAgentFromJSON,
    PostUniverseIdsAgentFromJSONTyped,
    PostUniverseIdsAgentToJSON,
    PostUniverseIdsAgentToJSONTyped,
} from './PostUniverseIdsAgent';

/**
 * 200 ok object
 * @export
 * @interface PostUniverseIdsOk
 */
export interface PostUniverseIdsOk {
    /**
     * agents array
     * @type {Array<PostUniverseIdsAgent>}
     * @memberof PostUniverseIdsOk
     */
    agents?: Array<PostUniverseIdsAgent>;
    /**
     * alliances array
     * @type {Array<PostUniverseIdsAlliance>}
     * @memberof PostUniverseIdsOk
     */
    alliances?: Array<PostUniverseIdsAlliance>;
    /**
     * characters array
     * @type {Array<PostUniverseIdsCharacter>}
     * @memberof PostUniverseIdsOk
     */
    characters?: Array<PostUniverseIdsCharacter>;
    /**
     * constellations array
     * @type {Array<PostUniverseIdsConstellation>}
     * @memberof PostUniverseIdsOk
     */
    constellations?: Array<PostUniverseIdsConstellation>;
    /**
     * corporations array
     * @type {Array<PostUniverseIdsCorporation>}
     * @memberof PostUniverseIdsOk
     */
    corporations?: Array<PostUniverseIdsCorporation>;
    /**
     * factions array
     * @type {Array<PostUniverseIdsFaction>}
     * @memberof PostUniverseIdsOk
     */
    factions?: Array<PostUniverseIdsFaction>;
    /**
     * inventory_types array
     * @type {Array<PostUniverseIdsInventoryType>}
     * @memberof PostUniverseIdsOk
     */
    inventoryTypes?: Array<PostUniverseIdsInventoryType>;
    /**
     * regions array
     * @type {Array<PostUniverseIdsRegion>}
     * @memberof PostUniverseIdsOk
     */
    regions?: Array<PostUniverseIdsRegion>;
    /**
     * stations array
     * @type {Array<PostUniverseIdsStation>}
     * @memberof PostUniverseIdsOk
     */
    stations?: Array<PostUniverseIdsStation>;
    /**
     * systems array
     * @type {Array<PostUniverseIdsSystem>}
     * @memberof PostUniverseIdsOk
     */
    systems?: Array<PostUniverseIdsSystem>;
}

/**
 * Check if a given object implements the PostUniverseIdsOk interface.
 */
export function instanceOfPostUniverseIdsOk(value: object): value is PostUniverseIdsOk {
    return true;
}

export function PostUniverseIdsOkFromJSON(json: any): PostUniverseIdsOk {
    return PostUniverseIdsOkFromJSONTyped(json, false);
}

export function PostUniverseIdsOkFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostUniverseIdsOk {
    if (json == null) {
        return json;
    }
    return {
        
        'agents': json['agents'] == null ? undefined : ((json['agents'] as Array<any>).map(PostUniverseIdsAgentFromJSON)),
        'alliances': json['alliances'] == null ? undefined : ((json['alliances'] as Array<any>).map(PostUniverseIdsAllianceFromJSON)),
        'characters': json['characters'] == null ? undefined : ((json['characters'] as Array<any>).map(PostUniverseIdsCharacterFromJSON)),
        'constellations': json['constellations'] == null ? undefined : ((json['constellations'] as Array<any>).map(PostUniverseIdsConstellationFromJSON)),
        'corporations': json['corporations'] == null ? undefined : ((json['corporations'] as Array<any>).map(PostUniverseIdsCorporationFromJSON)),
        'factions': json['factions'] == null ? undefined : ((json['factions'] as Array<any>).map(PostUniverseIdsFactionFromJSON)),
        'inventoryTypes': json['inventory_types'] == null ? undefined : ((json['inventory_types'] as Array<any>).map(PostUniverseIdsInventoryTypeFromJSON)),
        'regions': json['regions'] == null ? undefined : ((json['regions'] as Array<any>).map(PostUniverseIdsRegionFromJSON)),
        'stations': json['stations'] == null ? undefined : ((json['stations'] as Array<any>).map(PostUniverseIdsStationFromJSON)),
        'systems': json['systems'] == null ? undefined : ((json['systems'] as Array<any>).map(PostUniverseIdsSystemFromJSON)),
    };
}

export function PostUniverseIdsOkToJSON(json: any): PostUniverseIdsOk {
    return PostUniverseIdsOkToJSONTyped(json, false);
}

export function PostUniverseIdsOkToJSONTyped(value?: PostUniverseIdsOk | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'agents': value['agents'] == null ? undefined : ((value['agents'] as Array<any>).map(PostUniverseIdsAgentToJSON)),
        'alliances': value['alliances'] == null ? undefined : ((value['alliances'] as Array<any>).map(PostUniverseIdsAllianceToJSON)),
        'characters': value['characters'] == null ? undefined : ((value['characters'] as Array<any>).map(PostUniverseIdsCharacterToJSON)),
        'constellations': value['constellations'] == null ? undefined : ((value['constellations'] as Array<any>).map(PostUniverseIdsConstellationToJSON)),
        'corporations': value['corporations'] == null ? undefined : ((value['corporations'] as Array<any>).map(PostUniverseIdsCorporationToJSON)),
        'factions': value['factions'] == null ? undefined : ((value['factions'] as Array<any>).map(PostUniverseIdsFactionToJSON)),
        'inventory_types': value['inventoryTypes'] == null ? undefined : ((value['inventoryTypes'] as Array<any>).map(PostUniverseIdsInventoryTypeToJSON)),
        'regions': value['regions'] == null ? undefined : ((value['regions'] as Array<any>).map(PostUniverseIdsRegionToJSON)),
        'stations': value['stations'] == null ? undefined : ((value['stations'] as Array<any>).map(PostUniverseIdsStationToJSON)),
        'systems': value['systems'] == null ? undefined : ((value['systems'] as Array<any>).map(PostUniverseIdsSystemToJSON)),
    };
}

