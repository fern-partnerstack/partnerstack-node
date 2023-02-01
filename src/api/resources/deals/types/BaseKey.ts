/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PartnerStackApi } from "@fern-api/partnerstack";

export interface BaseKey {
    /** A group key */
    groupKey?: string;
    /** A partner key */
    partnerKey?: string;
    /** Name of the account */
    accountName?: string;
    /** Deal amount in **cents** */
    amount?: number;
    /** Expected close date of deal as YYYY-MM-DD */
    closeDate?: string;
    /** First name of the account's contact */
    contactFirstName?: string;
    /** Last name of the account's contact */
    contactLastName?: string;
    /** Reference that can be used in place of the key. */
    externalKey?: string;
    fields?: PartnerStackApi.FieldData[];
    /** Reason for which the deal was lost. */
    lostReason?: string;
    moldKey?: string;
    /** Source of the deal, either 'partner' or 'vendor', defaults to 'partner' if not specified */
    source?: PartnerStackApi.DealSource;
    /** Current stage of this deal. Must appear in Deals Stage list found in group settings. */
    stage?: string;
}
