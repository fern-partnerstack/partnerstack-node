/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { PartnerstackVendorApi } from "@fern-api/partnerstack";
import * as core from "../../../core";

export const CustomerId: core.schemas.Schema<serializers.CustomerId.Raw, PartnerstackVendorApi.CustomerId> =
  core.schemas.string();

export declare namespace CustomerId {
  type Raw = string;
}
