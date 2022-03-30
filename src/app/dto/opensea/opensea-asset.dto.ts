export class OpenseaAssetDto {
  animation_original_url: string;
  animation_url: string;

  asset_contract: object;

  background_color: string;

  collection: object;
  creator: object;

  decimals: number;
  description: string;
  external_link: string;
  id: number;
  image_original_url: string;
  image_preview_url: string;
  image_thumbnail_url: string;
  image_url: string;
  is_nsfw: boolean;
  is_presale: boolean;
  last_sale: boolean;
  listing_date: string;
  name: string;
  num_sales: number;

  owner: object;

  permalink: string;
  sell_orders: object; // ?
  token_id: string;
  token_metadata: string;
  top_bid: object; // ?
  traits: OpenseaAssetTraitDto[];
  transfer_fee?: number | string;
  transfer_fee_payment_token?: string;

}

export class OpenseaAssetTraitDto {
  trait_type: string;
  value: string | number;
  max_value?: string;
  order?: number;
  trait_count: number;
  display_type?: string;
}
