/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CustomerObject {
    /** External customer key that can be configured on creation. */
    customerKey?: string;
    /** The customers email, must be a valid email */
    email?: string;
    /** Should be either the customer's name, or the company name */
    name?: string;
    /** A unique identifier given by a payment provider (Stripe, Recurly, Chargebee etc) */
    providerKey?: string;
}
