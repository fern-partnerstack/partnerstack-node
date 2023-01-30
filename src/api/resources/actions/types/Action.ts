/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PartnerStackApi } from "@fern-api/partnerstack";

/**
 * An **Action** represents a specific action a partner or customer took on your platform
 */
export interface Action {
    /** The boolean flag which determines if the action is archived or not. */
    archived?: boolean;
    /** Base schema representation of a company */
    company?: PartnerStackApi.Company;
    customer?: PartnerStackApi.Customer;
    /** Unique key of this partnership. */
    partnershipKey?: string;
    /** The type of action the partner or customer performed */
    type?: string;
    /** The number of times the action was performed */
    value?: number;
}
