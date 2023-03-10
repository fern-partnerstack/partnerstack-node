/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PartnerStackApi } from "@fern-api/partnerstack";
import * as core from "../../../../core";

export const Customer: core.serialization.ObjectSchema<serializers.Customer.Raw, PartnerStackApi.Customer> =
    core.serialization.object({
        key: core.serialization.string().optional(),
        subIds: core.serialization.property("sub_ids", core.serialization.list(core.serialization.string()).optional()),
    });

export declare namespace Customer {
    interface Raw {
        key?: string | null;
        sub_ids?: string[] | null;
    }
}
