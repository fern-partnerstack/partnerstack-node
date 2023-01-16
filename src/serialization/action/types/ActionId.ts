/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { PartnerstackVendorApi } from "@fern-api/partnerstack";
import * as core from "../../../core";

export const ActionId: core.schemas.Schema<serializers.ActionId.Raw, PartnerstackVendorApi.ActionId> =
  core.schemas.string();

export declare namespace ActionId {
  type Raw = string;
}
