/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PartnerStackApi } from "@fern-api/partnerstack";
import * as core from "../../../../core";

export const ListAllDealsData: core.serialization.ObjectSchema<
    serializers.ListAllDealsData.Raw,
    PartnerStackApi.ListAllDealsData
> = core.serialization.object({
    hasMore: core.serialization.property("has_more", core.serialization.boolean().optional()),
    items: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).Deal))
        .optional(),
});

export declare namespace ListAllDealsData {
    interface Raw {
        has_more?: boolean | null;
        items?: serializers.Deal.Raw[] | null;
    }
}
