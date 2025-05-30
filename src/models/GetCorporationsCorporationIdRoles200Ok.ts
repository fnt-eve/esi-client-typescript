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
 * @interface GetCorporationsCorporationIdRoles200Ok
 */
export interface GetCorporationsCorporationIdRoles200Ok {
    /**
     * character_id integer
     * @type {number}
     * @memberof GetCorporationsCorporationIdRoles200Ok
     */
    characterId: number;
    /**
     * grantable_roles array
     * @type {Array<string>}
     * @memberof GetCorporationsCorporationIdRoles200Ok
     */
    grantableRoles?: Array<GetCorporationsCorporationIdRoles200OkGrantableRolesEnum>;
    /**
     * grantable_roles_at_base array
     * @type {Array<string>}
     * @memberof GetCorporationsCorporationIdRoles200Ok
     */
    grantableRolesAtBase?: Array<GetCorporationsCorporationIdRoles200OkGrantableRolesAtBaseEnum>;
    /**
     * grantable_roles_at_hq array
     * @type {Array<string>}
     * @memberof GetCorporationsCorporationIdRoles200Ok
     */
    grantableRolesAtHq?: Array<GetCorporationsCorporationIdRoles200OkGrantableRolesAtHqEnum>;
    /**
     * grantable_roles_at_other array
     * @type {Array<string>}
     * @memberof GetCorporationsCorporationIdRoles200Ok
     */
    grantableRolesAtOther?: Array<GetCorporationsCorporationIdRoles200OkGrantableRolesAtOtherEnum>;
    /**
     * roles array
     * @type {Array<string>}
     * @memberof GetCorporationsCorporationIdRoles200Ok
     */
    roles?: Array<GetCorporationsCorporationIdRoles200OkRolesEnum>;
    /**
     * roles_at_base array
     * @type {Array<string>}
     * @memberof GetCorporationsCorporationIdRoles200Ok
     */
    rolesAtBase?: Array<GetCorporationsCorporationIdRoles200OkRolesAtBaseEnum>;
    /**
     * roles_at_hq array
     * @type {Array<string>}
     * @memberof GetCorporationsCorporationIdRoles200Ok
     */
    rolesAtHq?: Array<GetCorporationsCorporationIdRoles200OkRolesAtHqEnum>;
    /**
     * roles_at_other array
     * @type {Array<string>}
     * @memberof GetCorporationsCorporationIdRoles200Ok
     */
    rolesAtOther?: Array<GetCorporationsCorporationIdRoles200OkRolesAtOtherEnum>;
}


/**
 * @export
 */
export const GetCorporationsCorporationIdRoles200OkGrantableRolesEnum = {
    AccountTake1: 'Account_Take_1',
    AccountTake2: 'Account_Take_2',
    AccountTake3: 'Account_Take_3',
    AccountTake4: 'Account_Take_4',
    AccountTake5: 'Account_Take_5',
    AccountTake6: 'Account_Take_6',
    AccountTake7: 'Account_Take_7',
    Accountant: 'Accountant',
    Auditor: 'Auditor',
    BrandManager: 'Brand_Manager',
    CommunicationsOfficer: 'Communications_Officer',
    ConfigEquipment: 'Config_Equipment',
    ConfigStarbaseEquipment: 'Config_Starbase_Equipment',
    ContainerTake1: 'Container_Take_1',
    ContainerTake2: 'Container_Take_2',
    ContainerTake3: 'Container_Take_3',
    ContainerTake4: 'Container_Take_4',
    ContainerTake5: 'Container_Take_5',
    ContainerTake6: 'Container_Take_6',
    ContainerTake7: 'Container_Take_7',
    ContractManager: 'Contract_Manager',
    DeliveriesContainerTake: 'Deliveries_Container_Take',
    DeliveriesQuery: 'Deliveries_Query',
    DeliveriesTake: 'Deliveries_Take',
    Diplomat: 'Diplomat',
    Director: 'Director',
    FactoryManager: 'Factory_Manager',
    FittingManager: 'Fitting_Manager',
    HangarQuery1: 'Hangar_Query_1',
    HangarQuery2: 'Hangar_Query_2',
    HangarQuery3: 'Hangar_Query_3',
    HangarQuery4: 'Hangar_Query_4',
    HangarQuery5: 'Hangar_Query_5',
    HangarQuery6: 'Hangar_Query_6',
    HangarQuery7: 'Hangar_Query_7',
    HangarTake1: 'Hangar_Take_1',
    HangarTake2: 'Hangar_Take_2',
    HangarTake3: 'Hangar_Take_3',
    HangarTake4: 'Hangar_Take_4',
    HangarTake5: 'Hangar_Take_5',
    HangarTake6: 'Hangar_Take_6',
    HangarTake7: 'Hangar_Take_7',
    JuniorAccountant: 'Junior_Accountant',
    PersonnelManager: 'Personnel_Manager',
    ProjectManager: 'Project_Manager',
    RentFactoryFacility: 'Rent_Factory_Facility',
    RentOffice: 'Rent_Office',
    RentResearchFacility: 'Rent_Research_Facility',
    SecurityOfficer: 'Security_Officer',
    SkillPlanManager: 'Skill_Plan_Manager',
    StarbaseDefenseOperator: 'Starbase_Defense_Operator',
    StarbaseFuelTechnician: 'Starbase_Fuel_Technician',
    StationManager: 'Station_Manager',
    Trader: 'Trader'
} as const;
export type GetCorporationsCorporationIdRoles200OkGrantableRolesEnum = typeof GetCorporationsCorporationIdRoles200OkGrantableRolesEnum[keyof typeof GetCorporationsCorporationIdRoles200OkGrantableRolesEnum];

/**
 * @export
 */
export const GetCorporationsCorporationIdRoles200OkGrantableRolesAtBaseEnum = {
    AccountTake1: 'Account_Take_1',
    AccountTake2: 'Account_Take_2',
    AccountTake3: 'Account_Take_3',
    AccountTake4: 'Account_Take_4',
    AccountTake5: 'Account_Take_5',
    AccountTake6: 'Account_Take_6',
    AccountTake7: 'Account_Take_7',
    Accountant: 'Accountant',
    Auditor: 'Auditor',
    BrandManager: 'Brand_Manager',
    CommunicationsOfficer: 'Communications_Officer',
    ConfigEquipment: 'Config_Equipment',
    ConfigStarbaseEquipment: 'Config_Starbase_Equipment',
    ContainerTake1: 'Container_Take_1',
    ContainerTake2: 'Container_Take_2',
    ContainerTake3: 'Container_Take_3',
    ContainerTake4: 'Container_Take_4',
    ContainerTake5: 'Container_Take_5',
    ContainerTake6: 'Container_Take_6',
    ContainerTake7: 'Container_Take_7',
    ContractManager: 'Contract_Manager',
    DeliveriesContainerTake: 'Deliveries_Container_Take',
    DeliveriesQuery: 'Deliveries_Query',
    DeliveriesTake: 'Deliveries_Take',
    Diplomat: 'Diplomat',
    Director: 'Director',
    FactoryManager: 'Factory_Manager',
    FittingManager: 'Fitting_Manager',
    HangarQuery1: 'Hangar_Query_1',
    HangarQuery2: 'Hangar_Query_2',
    HangarQuery3: 'Hangar_Query_3',
    HangarQuery4: 'Hangar_Query_4',
    HangarQuery5: 'Hangar_Query_5',
    HangarQuery6: 'Hangar_Query_6',
    HangarQuery7: 'Hangar_Query_7',
    HangarTake1: 'Hangar_Take_1',
    HangarTake2: 'Hangar_Take_2',
    HangarTake3: 'Hangar_Take_3',
    HangarTake4: 'Hangar_Take_4',
    HangarTake5: 'Hangar_Take_5',
    HangarTake6: 'Hangar_Take_6',
    HangarTake7: 'Hangar_Take_7',
    JuniorAccountant: 'Junior_Accountant',
    PersonnelManager: 'Personnel_Manager',
    ProjectManager: 'Project_Manager',
    RentFactoryFacility: 'Rent_Factory_Facility',
    RentOffice: 'Rent_Office',
    RentResearchFacility: 'Rent_Research_Facility',
    SecurityOfficer: 'Security_Officer',
    SkillPlanManager: 'Skill_Plan_Manager',
    StarbaseDefenseOperator: 'Starbase_Defense_Operator',
    StarbaseFuelTechnician: 'Starbase_Fuel_Technician',
    StationManager: 'Station_Manager',
    Trader: 'Trader'
} as const;
export type GetCorporationsCorporationIdRoles200OkGrantableRolesAtBaseEnum = typeof GetCorporationsCorporationIdRoles200OkGrantableRolesAtBaseEnum[keyof typeof GetCorporationsCorporationIdRoles200OkGrantableRolesAtBaseEnum];

/**
 * @export
 */
export const GetCorporationsCorporationIdRoles200OkGrantableRolesAtHqEnum = {
    AccountTake1: 'Account_Take_1',
    AccountTake2: 'Account_Take_2',
    AccountTake3: 'Account_Take_3',
    AccountTake4: 'Account_Take_4',
    AccountTake5: 'Account_Take_5',
    AccountTake6: 'Account_Take_6',
    AccountTake7: 'Account_Take_7',
    Accountant: 'Accountant',
    Auditor: 'Auditor',
    BrandManager: 'Brand_Manager',
    CommunicationsOfficer: 'Communications_Officer',
    ConfigEquipment: 'Config_Equipment',
    ConfigStarbaseEquipment: 'Config_Starbase_Equipment',
    ContainerTake1: 'Container_Take_1',
    ContainerTake2: 'Container_Take_2',
    ContainerTake3: 'Container_Take_3',
    ContainerTake4: 'Container_Take_4',
    ContainerTake5: 'Container_Take_5',
    ContainerTake6: 'Container_Take_6',
    ContainerTake7: 'Container_Take_7',
    ContractManager: 'Contract_Manager',
    DeliveriesContainerTake: 'Deliveries_Container_Take',
    DeliveriesQuery: 'Deliveries_Query',
    DeliveriesTake: 'Deliveries_Take',
    Diplomat: 'Diplomat',
    Director: 'Director',
    FactoryManager: 'Factory_Manager',
    FittingManager: 'Fitting_Manager',
    HangarQuery1: 'Hangar_Query_1',
    HangarQuery2: 'Hangar_Query_2',
    HangarQuery3: 'Hangar_Query_3',
    HangarQuery4: 'Hangar_Query_4',
    HangarQuery5: 'Hangar_Query_5',
    HangarQuery6: 'Hangar_Query_6',
    HangarQuery7: 'Hangar_Query_7',
    HangarTake1: 'Hangar_Take_1',
    HangarTake2: 'Hangar_Take_2',
    HangarTake3: 'Hangar_Take_3',
    HangarTake4: 'Hangar_Take_4',
    HangarTake5: 'Hangar_Take_5',
    HangarTake6: 'Hangar_Take_6',
    HangarTake7: 'Hangar_Take_7',
    JuniorAccountant: 'Junior_Accountant',
    PersonnelManager: 'Personnel_Manager',
    ProjectManager: 'Project_Manager',
    RentFactoryFacility: 'Rent_Factory_Facility',
    RentOffice: 'Rent_Office',
    RentResearchFacility: 'Rent_Research_Facility',
    SecurityOfficer: 'Security_Officer',
    SkillPlanManager: 'Skill_Plan_Manager',
    StarbaseDefenseOperator: 'Starbase_Defense_Operator',
    StarbaseFuelTechnician: 'Starbase_Fuel_Technician',
    StationManager: 'Station_Manager',
    Trader: 'Trader'
} as const;
export type GetCorporationsCorporationIdRoles200OkGrantableRolesAtHqEnum = typeof GetCorporationsCorporationIdRoles200OkGrantableRolesAtHqEnum[keyof typeof GetCorporationsCorporationIdRoles200OkGrantableRolesAtHqEnum];

/**
 * @export
 */
export const GetCorporationsCorporationIdRoles200OkGrantableRolesAtOtherEnum = {
    AccountTake1: 'Account_Take_1',
    AccountTake2: 'Account_Take_2',
    AccountTake3: 'Account_Take_3',
    AccountTake4: 'Account_Take_4',
    AccountTake5: 'Account_Take_5',
    AccountTake6: 'Account_Take_6',
    AccountTake7: 'Account_Take_7',
    Accountant: 'Accountant',
    Auditor: 'Auditor',
    BrandManager: 'Brand_Manager',
    CommunicationsOfficer: 'Communications_Officer',
    ConfigEquipment: 'Config_Equipment',
    ConfigStarbaseEquipment: 'Config_Starbase_Equipment',
    ContainerTake1: 'Container_Take_1',
    ContainerTake2: 'Container_Take_2',
    ContainerTake3: 'Container_Take_3',
    ContainerTake4: 'Container_Take_4',
    ContainerTake5: 'Container_Take_5',
    ContainerTake6: 'Container_Take_6',
    ContainerTake7: 'Container_Take_7',
    ContractManager: 'Contract_Manager',
    DeliveriesContainerTake: 'Deliveries_Container_Take',
    DeliveriesQuery: 'Deliveries_Query',
    DeliveriesTake: 'Deliveries_Take',
    Diplomat: 'Diplomat',
    Director: 'Director',
    FactoryManager: 'Factory_Manager',
    FittingManager: 'Fitting_Manager',
    HangarQuery1: 'Hangar_Query_1',
    HangarQuery2: 'Hangar_Query_2',
    HangarQuery3: 'Hangar_Query_3',
    HangarQuery4: 'Hangar_Query_4',
    HangarQuery5: 'Hangar_Query_5',
    HangarQuery6: 'Hangar_Query_6',
    HangarQuery7: 'Hangar_Query_7',
    HangarTake1: 'Hangar_Take_1',
    HangarTake2: 'Hangar_Take_2',
    HangarTake3: 'Hangar_Take_3',
    HangarTake4: 'Hangar_Take_4',
    HangarTake5: 'Hangar_Take_5',
    HangarTake6: 'Hangar_Take_6',
    HangarTake7: 'Hangar_Take_7',
    JuniorAccountant: 'Junior_Accountant',
    PersonnelManager: 'Personnel_Manager',
    ProjectManager: 'Project_Manager',
    RentFactoryFacility: 'Rent_Factory_Facility',
    RentOffice: 'Rent_Office',
    RentResearchFacility: 'Rent_Research_Facility',
    SecurityOfficer: 'Security_Officer',
    SkillPlanManager: 'Skill_Plan_Manager',
    StarbaseDefenseOperator: 'Starbase_Defense_Operator',
    StarbaseFuelTechnician: 'Starbase_Fuel_Technician',
    StationManager: 'Station_Manager',
    Trader: 'Trader'
} as const;
export type GetCorporationsCorporationIdRoles200OkGrantableRolesAtOtherEnum = typeof GetCorporationsCorporationIdRoles200OkGrantableRolesAtOtherEnum[keyof typeof GetCorporationsCorporationIdRoles200OkGrantableRolesAtOtherEnum];

/**
 * @export
 */
export const GetCorporationsCorporationIdRoles200OkRolesEnum = {
    AccountTake1: 'Account_Take_1',
    AccountTake2: 'Account_Take_2',
    AccountTake3: 'Account_Take_3',
    AccountTake4: 'Account_Take_4',
    AccountTake5: 'Account_Take_5',
    AccountTake6: 'Account_Take_6',
    AccountTake7: 'Account_Take_7',
    Accountant: 'Accountant',
    Auditor: 'Auditor',
    BrandManager: 'Brand_Manager',
    CommunicationsOfficer: 'Communications_Officer',
    ConfigEquipment: 'Config_Equipment',
    ConfigStarbaseEquipment: 'Config_Starbase_Equipment',
    ContainerTake1: 'Container_Take_1',
    ContainerTake2: 'Container_Take_2',
    ContainerTake3: 'Container_Take_3',
    ContainerTake4: 'Container_Take_4',
    ContainerTake5: 'Container_Take_5',
    ContainerTake6: 'Container_Take_6',
    ContainerTake7: 'Container_Take_7',
    ContractManager: 'Contract_Manager',
    DeliveriesContainerTake: 'Deliveries_Container_Take',
    DeliveriesQuery: 'Deliveries_Query',
    DeliveriesTake: 'Deliveries_Take',
    Diplomat: 'Diplomat',
    Director: 'Director',
    FactoryManager: 'Factory_Manager',
    FittingManager: 'Fitting_Manager',
    HangarQuery1: 'Hangar_Query_1',
    HangarQuery2: 'Hangar_Query_2',
    HangarQuery3: 'Hangar_Query_3',
    HangarQuery4: 'Hangar_Query_4',
    HangarQuery5: 'Hangar_Query_5',
    HangarQuery6: 'Hangar_Query_6',
    HangarQuery7: 'Hangar_Query_7',
    HangarTake1: 'Hangar_Take_1',
    HangarTake2: 'Hangar_Take_2',
    HangarTake3: 'Hangar_Take_3',
    HangarTake4: 'Hangar_Take_4',
    HangarTake5: 'Hangar_Take_5',
    HangarTake6: 'Hangar_Take_6',
    HangarTake7: 'Hangar_Take_7',
    JuniorAccountant: 'Junior_Accountant',
    PersonnelManager: 'Personnel_Manager',
    ProjectManager: 'Project_Manager',
    RentFactoryFacility: 'Rent_Factory_Facility',
    RentOffice: 'Rent_Office',
    RentResearchFacility: 'Rent_Research_Facility',
    SecurityOfficer: 'Security_Officer',
    SkillPlanManager: 'Skill_Plan_Manager',
    StarbaseDefenseOperator: 'Starbase_Defense_Operator',
    StarbaseFuelTechnician: 'Starbase_Fuel_Technician',
    StationManager: 'Station_Manager',
    Trader: 'Trader'
} as const;
export type GetCorporationsCorporationIdRoles200OkRolesEnum = typeof GetCorporationsCorporationIdRoles200OkRolesEnum[keyof typeof GetCorporationsCorporationIdRoles200OkRolesEnum];

/**
 * @export
 */
export const GetCorporationsCorporationIdRoles200OkRolesAtBaseEnum = {
    AccountTake1: 'Account_Take_1',
    AccountTake2: 'Account_Take_2',
    AccountTake3: 'Account_Take_3',
    AccountTake4: 'Account_Take_4',
    AccountTake5: 'Account_Take_5',
    AccountTake6: 'Account_Take_6',
    AccountTake7: 'Account_Take_7',
    Accountant: 'Accountant',
    Auditor: 'Auditor',
    BrandManager: 'Brand_Manager',
    CommunicationsOfficer: 'Communications_Officer',
    ConfigEquipment: 'Config_Equipment',
    ConfigStarbaseEquipment: 'Config_Starbase_Equipment',
    ContainerTake1: 'Container_Take_1',
    ContainerTake2: 'Container_Take_2',
    ContainerTake3: 'Container_Take_3',
    ContainerTake4: 'Container_Take_4',
    ContainerTake5: 'Container_Take_5',
    ContainerTake6: 'Container_Take_6',
    ContainerTake7: 'Container_Take_7',
    ContractManager: 'Contract_Manager',
    DeliveriesContainerTake: 'Deliveries_Container_Take',
    DeliveriesQuery: 'Deliveries_Query',
    DeliveriesTake: 'Deliveries_Take',
    Diplomat: 'Diplomat',
    Director: 'Director',
    FactoryManager: 'Factory_Manager',
    FittingManager: 'Fitting_Manager',
    HangarQuery1: 'Hangar_Query_1',
    HangarQuery2: 'Hangar_Query_2',
    HangarQuery3: 'Hangar_Query_3',
    HangarQuery4: 'Hangar_Query_4',
    HangarQuery5: 'Hangar_Query_5',
    HangarQuery6: 'Hangar_Query_6',
    HangarQuery7: 'Hangar_Query_7',
    HangarTake1: 'Hangar_Take_1',
    HangarTake2: 'Hangar_Take_2',
    HangarTake3: 'Hangar_Take_3',
    HangarTake4: 'Hangar_Take_4',
    HangarTake5: 'Hangar_Take_5',
    HangarTake6: 'Hangar_Take_6',
    HangarTake7: 'Hangar_Take_7',
    JuniorAccountant: 'Junior_Accountant',
    PersonnelManager: 'Personnel_Manager',
    ProjectManager: 'Project_Manager',
    RentFactoryFacility: 'Rent_Factory_Facility',
    RentOffice: 'Rent_Office',
    RentResearchFacility: 'Rent_Research_Facility',
    SecurityOfficer: 'Security_Officer',
    SkillPlanManager: 'Skill_Plan_Manager',
    StarbaseDefenseOperator: 'Starbase_Defense_Operator',
    StarbaseFuelTechnician: 'Starbase_Fuel_Technician',
    StationManager: 'Station_Manager',
    Trader: 'Trader'
} as const;
export type GetCorporationsCorporationIdRoles200OkRolesAtBaseEnum = typeof GetCorporationsCorporationIdRoles200OkRolesAtBaseEnum[keyof typeof GetCorporationsCorporationIdRoles200OkRolesAtBaseEnum];

/**
 * @export
 */
export const GetCorporationsCorporationIdRoles200OkRolesAtHqEnum = {
    AccountTake1: 'Account_Take_1',
    AccountTake2: 'Account_Take_2',
    AccountTake3: 'Account_Take_3',
    AccountTake4: 'Account_Take_4',
    AccountTake5: 'Account_Take_5',
    AccountTake6: 'Account_Take_6',
    AccountTake7: 'Account_Take_7',
    Accountant: 'Accountant',
    Auditor: 'Auditor',
    BrandManager: 'Brand_Manager',
    CommunicationsOfficer: 'Communications_Officer',
    ConfigEquipment: 'Config_Equipment',
    ConfigStarbaseEquipment: 'Config_Starbase_Equipment',
    ContainerTake1: 'Container_Take_1',
    ContainerTake2: 'Container_Take_2',
    ContainerTake3: 'Container_Take_3',
    ContainerTake4: 'Container_Take_4',
    ContainerTake5: 'Container_Take_5',
    ContainerTake6: 'Container_Take_6',
    ContainerTake7: 'Container_Take_7',
    ContractManager: 'Contract_Manager',
    DeliveriesContainerTake: 'Deliveries_Container_Take',
    DeliveriesQuery: 'Deliveries_Query',
    DeliveriesTake: 'Deliveries_Take',
    Diplomat: 'Diplomat',
    Director: 'Director',
    FactoryManager: 'Factory_Manager',
    FittingManager: 'Fitting_Manager',
    HangarQuery1: 'Hangar_Query_1',
    HangarQuery2: 'Hangar_Query_2',
    HangarQuery3: 'Hangar_Query_3',
    HangarQuery4: 'Hangar_Query_4',
    HangarQuery5: 'Hangar_Query_5',
    HangarQuery6: 'Hangar_Query_6',
    HangarQuery7: 'Hangar_Query_7',
    HangarTake1: 'Hangar_Take_1',
    HangarTake2: 'Hangar_Take_2',
    HangarTake3: 'Hangar_Take_3',
    HangarTake4: 'Hangar_Take_4',
    HangarTake5: 'Hangar_Take_5',
    HangarTake6: 'Hangar_Take_6',
    HangarTake7: 'Hangar_Take_7',
    JuniorAccountant: 'Junior_Accountant',
    PersonnelManager: 'Personnel_Manager',
    ProjectManager: 'Project_Manager',
    RentFactoryFacility: 'Rent_Factory_Facility',
    RentOffice: 'Rent_Office',
    RentResearchFacility: 'Rent_Research_Facility',
    SecurityOfficer: 'Security_Officer',
    SkillPlanManager: 'Skill_Plan_Manager',
    StarbaseDefenseOperator: 'Starbase_Defense_Operator',
    StarbaseFuelTechnician: 'Starbase_Fuel_Technician',
    StationManager: 'Station_Manager',
    Trader: 'Trader'
} as const;
export type GetCorporationsCorporationIdRoles200OkRolesAtHqEnum = typeof GetCorporationsCorporationIdRoles200OkRolesAtHqEnum[keyof typeof GetCorporationsCorporationIdRoles200OkRolesAtHqEnum];

/**
 * @export
 */
export const GetCorporationsCorporationIdRoles200OkRolesAtOtherEnum = {
    AccountTake1: 'Account_Take_1',
    AccountTake2: 'Account_Take_2',
    AccountTake3: 'Account_Take_3',
    AccountTake4: 'Account_Take_4',
    AccountTake5: 'Account_Take_5',
    AccountTake6: 'Account_Take_6',
    AccountTake7: 'Account_Take_7',
    Accountant: 'Accountant',
    Auditor: 'Auditor',
    BrandManager: 'Brand_Manager',
    CommunicationsOfficer: 'Communications_Officer',
    ConfigEquipment: 'Config_Equipment',
    ConfigStarbaseEquipment: 'Config_Starbase_Equipment',
    ContainerTake1: 'Container_Take_1',
    ContainerTake2: 'Container_Take_2',
    ContainerTake3: 'Container_Take_3',
    ContainerTake4: 'Container_Take_4',
    ContainerTake5: 'Container_Take_5',
    ContainerTake6: 'Container_Take_6',
    ContainerTake7: 'Container_Take_7',
    ContractManager: 'Contract_Manager',
    DeliveriesContainerTake: 'Deliveries_Container_Take',
    DeliveriesQuery: 'Deliveries_Query',
    DeliveriesTake: 'Deliveries_Take',
    Diplomat: 'Diplomat',
    Director: 'Director',
    FactoryManager: 'Factory_Manager',
    FittingManager: 'Fitting_Manager',
    HangarQuery1: 'Hangar_Query_1',
    HangarQuery2: 'Hangar_Query_2',
    HangarQuery3: 'Hangar_Query_3',
    HangarQuery4: 'Hangar_Query_4',
    HangarQuery5: 'Hangar_Query_5',
    HangarQuery6: 'Hangar_Query_6',
    HangarQuery7: 'Hangar_Query_7',
    HangarTake1: 'Hangar_Take_1',
    HangarTake2: 'Hangar_Take_2',
    HangarTake3: 'Hangar_Take_3',
    HangarTake4: 'Hangar_Take_4',
    HangarTake5: 'Hangar_Take_5',
    HangarTake6: 'Hangar_Take_6',
    HangarTake7: 'Hangar_Take_7',
    JuniorAccountant: 'Junior_Accountant',
    PersonnelManager: 'Personnel_Manager',
    ProjectManager: 'Project_Manager',
    RentFactoryFacility: 'Rent_Factory_Facility',
    RentOffice: 'Rent_Office',
    RentResearchFacility: 'Rent_Research_Facility',
    SecurityOfficer: 'Security_Officer',
    SkillPlanManager: 'Skill_Plan_Manager',
    StarbaseDefenseOperator: 'Starbase_Defense_Operator',
    StarbaseFuelTechnician: 'Starbase_Fuel_Technician',
    StationManager: 'Station_Manager',
    Trader: 'Trader'
} as const;
export type GetCorporationsCorporationIdRoles200OkRolesAtOtherEnum = typeof GetCorporationsCorporationIdRoles200OkRolesAtOtherEnum[keyof typeof GetCorporationsCorporationIdRoles200OkRolesAtOtherEnum];


/**
 * Check if a given object implements the GetCorporationsCorporationIdRoles200Ok interface.
 */
export function instanceOfGetCorporationsCorporationIdRoles200Ok(value: object): value is GetCorporationsCorporationIdRoles200Ok {
    if (!('characterId' in value) || value['characterId'] === undefined) return false;
    return true;
}

export function GetCorporationsCorporationIdRoles200OkFromJSON(json: any): GetCorporationsCorporationIdRoles200Ok {
    return GetCorporationsCorporationIdRoles200OkFromJSONTyped(json, false);
}

export function GetCorporationsCorporationIdRoles200OkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCorporationsCorporationIdRoles200Ok {
    if (json == null) {
        return json;
    }
    return {
        
        'characterId': json['character_id'],
        'grantableRoles': json['grantable_roles'] == null ? undefined : json['grantable_roles'],
        'grantableRolesAtBase': json['grantable_roles_at_base'] == null ? undefined : json['grantable_roles_at_base'],
        'grantableRolesAtHq': json['grantable_roles_at_hq'] == null ? undefined : json['grantable_roles_at_hq'],
        'grantableRolesAtOther': json['grantable_roles_at_other'] == null ? undefined : json['grantable_roles_at_other'],
        'roles': json['roles'] == null ? undefined : json['roles'],
        'rolesAtBase': json['roles_at_base'] == null ? undefined : json['roles_at_base'],
        'rolesAtHq': json['roles_at_hq'] == null ? undefined : json['roles_at_hq'],
        'rolesAtOther': json['roles_at_other'] == null ? undefined : json['roles_at_other'],
    };
}

export function GetCorporationsCorporationIdRoles200OkToJSON(json: any): GetCorporationsCorporationIdRoles200Ok {
    return GetCorporationsCorporationIdRoles200OkToJSONTyped(json, false);
}

export function GetCorporationsCorporationIdRoles200OkToJSONTyped(value?: GetCorporationsCorporationIdRoles200Ok | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'character_id': value['characterId'],
        'grantable_roles': value['grantableRoles'],
        'grantable_roles_at_base': value['grantableRolesAtBase'],
        'grantable_roles_at_hq': value['grantableRolesAtHq'],
        'grantable_roles_at_other': value['grantableRolesAtOther'],
        'roles': value['roles'],
        'roles_at_base': value['rolesAtBase'],
        'roles_at_hq': value['rolesAtHq'],
        'roles_at_other': value['rolesAtOther'],
    };
}

