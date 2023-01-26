/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PartnerstackApi } from "@fern-api/partnerstack";

export interface UpdateDealRequest {
    accountName?: string;
    amount?: number;
    closeDate?: string;
    contactFirstName?: string;
    contactLastName?: string;
    externalKey?: string;
    fields?: PartnerstackApi.FieldData[];
    groupKey?: string;
    lostReason?: string;
    moldKey?: string;
    partnerKey?: string;
    source?: PartnerstackApi.DealSource;
    stage?: string;
    team?: PartnerstackApi.Team;
    teamMember?: PartnerstackApi.TeamMember;
}
