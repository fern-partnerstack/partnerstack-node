/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PartnerStackApi } from "@fern-api/partnerstack";
import * as core from "../../../../core";

export const Action: core.serialization.ObjectSchema<serializers.Action.Raw, PartnerStackApi.Action> =
    core.serialization.object({
        archived: core.serialization.boolean().optional(),
        company: core.serialization.lazyObject(async () => (await import("../../..")).Company).optional(),
        customer: core.serialization.lazyObject(async () => (await import("../../..")).Customer).optional(),
        partnershipKey: core.serialization.property("partnership_key", core.serialization.string().optional()),
        type: core.serialization.string().optional(),
        value: core.serialization.number().optional(),
    });

export declare namespace Action {
    interface Raw {
        archived?: boolean | null;
        company?: serializers.Company.Raw | null;
        customer?: serializers.Customer.Raw | null;
        partnership_key?: string | null;
        type?: string | null;
        value?: number | null;
    }
}
