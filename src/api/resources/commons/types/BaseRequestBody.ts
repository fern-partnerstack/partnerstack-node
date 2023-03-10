/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PartnerStackApi } from "@fern-api/partnerstack";

/**
 * **Actions** represent a specific action a partner or customer took on your platform
 */
export interface BaseRequestBody {
    /** The external key of the action record in PartnerStack */
    externalKey?: string;
    /** The identifier of the target specified in `target_type`. For a customer, this is the customer key. For a partnership, it is their partner key. */
    targetKey?: string;
    targetType?: PartnerStackApi.TargetType;
    /** The type of action the partner or customer performed */
    type?: string;
    /** The number of times the action was performed */
    value?: number;
}
