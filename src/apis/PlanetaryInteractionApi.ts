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


import * as runtime from '../runtime';
import type {
  BadRequest,
  ErrorLimited,
  Forbidden,
  GatewayTimeout,
  GetCharactersCharacterIdPlanets200Ok,
  GetCharactersCharacterIdPlanetsPlanetIdNotFound,
  GetCharactersCharacterIdPlanetsPlanetIdOk,
  GetCorporationsCorporationIdCustomsOffices200Ok,
  GetUniverseSchematicsSchematicIdNotFound,
  GetUniverseSchematicsSchematicIdOk,
  InternalServerError,
  ServiceUnavailable,
  Unauthorized,
} from '../models/index';
import {
    BadRequestFromJSON,
    BadRequestToJSON,
    ErrorLimitedFromJSON,
    ErrorLimitedToJSON,
    ForbiddenFromJSON,
    ForbiddenToJSON,
    GatewayTimeoutFromJSON,
    GatewayTimeoutToJSON,
    GetCharactersCharacterIdPlanets200OkFromJSON,
    GetCharactersCharacterIdPlanets200OkToJSON,
    GetCharactersCharacterIdPlanetsPlanetIdNotFoundFromJSON,
    GetCharactersCharacterIdPlanetsPlanetIdNotFoundToJSON,
    GetCharactersCharacterIdPlanetsPlanetIdOkFromJSON,
    GetCharactersCharacterIdPlanetsPlanetIdOkToJSON,
    GetCorporationsCorporationIdCustomsOffices200OkFromJSON,
    GetCorporationsCorporationIdCustomsOffices200OkToJSON,
    GetUniverseSchematicsSchematicIdNotFoundFromJSON,
    GetUniverseSchematicsSchematicIdNotFoundToJSON,
    GetUniverseSchematicsSchematicIdOkFromJSON,
    GetUniverseSchematicsSchematicIdOkToJSON,
    InternalServerErrorFromJSON,
    InternalServerErrorToJSON,
    ServiceUnavailableFromJSON,
    ServiceUnavailableToJSON,
    UnauthorizedFromJSON,
    UnauthorizedToJSON,
} from '../models/index';

export interface GetCharactersCharacterIdPlanetsRequest {
    characterId: number;
    datasource?: GetCharactersCharacterIdPlanetsDatasourceEnum;
    ifNoneMatch?: string;
    token?: string;
}

export interface GetCharactersCharacterIdPlanetsPlanetIdRequest {
    characterId: number;
    planetId: number;
    datasource?: GetCharactersCharacterIdPlanetsPlanetIdDatasourceEnum;
    token?: string;
}

export interface GetCorporationsCorporationIdCustomsOfficesRequest {
    corporationId: number;
    datasource?: GetCorporationsCorporationIdCustomsOfficesDatasourceEnum;
    ifNoneMatch?: string;
    page?: number;
    token?: string;
}

export interface GetUniverseSchematicsSchematicIdRequest {
    schematicId: number;
    datasource?: GetUniverseSchematicsSchematicIdDatasourceEnum;
    ifNoneMatch?: string;
}

/**
 * 
 */
export class PlanetaryInteractionApi extends runtime.BaseAPI {

    /**
     * Returns a list of all planetary colonies owned by a character.  ---  This route is cached for up to 600 seconds
     * Get colonies
     */
    async getCharactersCharacterIdPlanetsRaw(requestParameters: GetCharactersCharacterIdPlanetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetCharactersCharacterIdPlanets200Ok>>> {
        if (requestParameters['characterId'] == null) {
            throw new runtime.RequiredError(
                'characterId',
                'Required parameter "characterId" was null or undefined when calling getCharactersCharacterIdPlanets().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['datasource'] != null) {
            queryParameters['datasource'] = requestParameters['datasource'];
        }

        if (requestParameters['token'] != null) {
            queryParameters['token'] = requestParameters['token'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['ifNoneMatch'] != null) {
            headerParameters['If-None-Match'] = String(requestParameters['ifNoneMatch']);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("evesso", ["esi-planets.manage_planets.v1"]);
        }

        const response = await this.request({
            path: `/v1/characters/{character_id}/planets/`.replace(`{${"character_id"}}`, encodeURIComponent(String(requestParameters['characterId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetCharactersCharacterIdPlanets200OkFromJSON));
    }

    /**
     * Returns a list of all planetary colonies owned by a character.  ---  This route is cached for up to 600 seconds
     * Get colonies
     */
    async getCharactersCharacterIdPlanets(requestParameters: GetCharactersCharacterIdPlanetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetCharactersCharacterIdPlanets200Ok>> {
        const response = await this.getCharactersCharacterIdPlanetsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns full details on the layout of a single planetary colony, including links, pins and routes. Note: Planetary information is only recalculated when the colony is viewed through the client. Information will not update until this criteria is met.  --- 
     * Get colony layout
     */
    async getCharactersCharacterIdPlanetsPlanetIdRaw(requestParameters: GetCharactersCharacterIdPlanetsPlanetIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetCharactersCharacterIdPlanetsPlanetIdOk>> {
        if (requestParameters['characterId'] == null) {
            throw new runtime.RequiredError(
                'characterId',
                'Required parameter "characterId" was null or undefined when calling getCharactersCharacterIdPlanetsPlanetId().'
            );
        }

        if (requestParameters['planetId'] == null) {
            throw new runtime.RequiredError(
                'planetId',
                'Required parameter "planetId" was null or undefined when calling getCharactersCharacterIdPlanetsPlanetId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['datasource'] != null) {
            queryParameters['datasource'] = requestParameters['datasource'];
        }

        if (requestParameters['token'] != null) {
            queryParameters['token'] = requestParameters['token'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("evesso", ["esi-planets.manage_planets.v1"]);
        }

        const response = await this.request({
            path: `/v3/characters/{character_id}/planets/{planet_id}/`.replace(`{${"character_id"}}`, encodeURIComponent(String(requestParameters['characterId']))).replace(`{${"planet_id"}}`, encodeURIComponent(String(requestParameters['planetId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetCharactersCharacterIdPlanetsPlanetIdOkFromJSON(jsonValue));
    }

    /**
     * Returns full details on the layout of a single planetary colony, including links, pins and routes. Note: Planetary information is only recalculated when the colony is viewed through the client. Information will not update until this criteria is met.  --- 
     * Get colony layout
     */
    async getCharactersCharacterIdPlanetsPlanetId(requestParameters: GetCharactersCharacterIdPlanetsPlanetIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetCharactersCharacterIdPlanetsPlanetIdOk> {
        const response = await this.getCharactersCharacterIdPlanetsPlanetIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List customs offices owned by a corporation  ---  This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Director
     * List corporation customs offices
     */
    async getCorporationsCorporationIdCustomsOfficesRaw(requestParameters: GetCorporationsCorporationIdCustomsOfficesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetCorporationsCorporationIdCustomsOffices200Ok>>> {
        if (requestParameters['corporationId'] == null) {
            throw new runtime.RequiredError(
                'corporationId',
                'Required parameter "corporationId" was null or undefined when calling getCorporationsCorporationIdCustomsOffices().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['datasource'] != null) {
            queryParameters['datasource'] = requestParameters['datasource'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['token'] != null) {
            queryParameters['token'] = requestParameters['token'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['ifNoneMatch'] != null) {
            headerParameters['If-None-Match'] = String(requestParameters['ifNoneMatch']);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("evesso", ["esi-planets.read_customs_offices.v1"]);
        }

        const response = await this.request({
            path: `/v1/corporations/{corporation_id}/customs_offices/`.replace(`{${"corporation_id"}}`, encodeURIComponent(String(requestParameters['corporationId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetCorporationsCorporationIdCustomsOffices200OkFromJSON));
    }

    /**
     * List customs offices owned by a corporation  ---  This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Director
     * List corporation customs offices
     */
    async getCorporationsCorporationIdCustomsOffices(requestParameters: GetCorporationsCorporationIdCustomsOfficesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetCorporationsCorporationIdCustomsOffices200Ok>> {
        const response = await this.getCorporationsCorporationIdCustomsOfficesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get information on a planetary factory schematic  ---  This route is cached for up to 3600 seconds
     * Get schematic information
     */
    async getUniverseSchematicsSchematicIdRaw(requestParameters: GetUniverseSchematicsSchematicIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetUniverseSchematicsSchematicIdOk>> {
        if (requestParameters['schematicId'] == null) {
            throw new runtime.RequiredError(
                'schematicId',
                'Required parameter "schematicId" was null or undefined when calling getUniverseSchematicsSchematicId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['datasource'] != null) {
            queryParameters['datasource'] = requestParameters['datasource'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['ifNoneMatch'] != null) {
            headerParameters['If-None-Match'] = String(requestParameters['ifNoneMatch']);
        }

        const response = await this.request({
            path: `/v1/universe/schematics/{schematic_id}/`.replace(`{${"schematic_id"}}`, encodeURIComponent(String(requestParameters['schematicId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetUniverseSchematicsSchematicIdOkFromJSON(jsonValue));
    }

    /**
     * Get information on a planetary factory schematic  ---  This route is cached for up to 3600 seconds
     * Get schematic information
     */
    async getUniverseSchematicsSchematicId(requestParameters: GetUniverseSchematicsSchematicIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetUniverseSchematicsSchematicIdOk> {
        const response = await this.getUniverseSchematicsSchematicIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetCharactersCharacterIdPlanetsDatasourceEnum = {
    Tranquility: 'tranquility'
} as const;
export type GetCharactersCharacterIdPlanetsDatasourceEnum = typeof GetCharactersCharacterIdPlanetsDatasourceEnum[keyof typeof GetCharactersCharacterIdPlanetsDatasourceEnum];
/**
 * @export
 */
export const GetCharactersCharacterIdPlanetsPlanetIdDatasourceEnum = {
    Tranquility: 'tranquility'
} as const;
export type GetCharactersCharacterIdPlanetsPlanetIdDatasourceEnum = typeof GetCharactersCharacterIdPlanetsPlanetIdDatasourceEnum[keyof typeof GetCharactersCharacterIdPlanetsPlanetIdDatasourceEnum];
/**
 * @export
 */
export const GetCorporationsCorporationIdCustomsOfficesDatasourceEnum = {
    Tranquility: 'tranquility'
} as const;
export type GetCorporationsCorporationIdCustomsOfficesDatasourceEnum = typeof GetCorporationsCorporationIdCustomsOfficesDatasourceEnum[keyof typeof GetCorporationsCorporationIdCustomsOfficesDatasourceEnum];
/**
 * @export
 */
export const GetUniverseSchematicsSchematicIdDatasourceEnum = {
    Tranquility: 'tranquility'
} as const;
export type GetUniverseSchematicsSchematicIdDatasourceEnum = typeof GetUniverseSchematicsSchematicIdDatasourceEnum[keyof typeof GetUniverseSchematicsSchematicIdDatasourceEnum];
