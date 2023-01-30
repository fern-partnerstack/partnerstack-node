/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PartnerStackApi } from "@fern-api/partnerstack";
import * as core from "../../../../core";

export const Team: core.serialization.ObjectSchema<serializers.Team.Raw, PartnerStackApi.Team> = core.serialization
    .object({
        name: core.serialization.string().optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).BaseObject));

export declare namespace Team {
    interface Raw extends serializers.BaseObject.Raw {
        name?: string | null;
    }
}
