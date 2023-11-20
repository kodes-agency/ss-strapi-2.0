import type { Schema, Attribute } from '@strapi/strapi';

export interface CookiesCookieType extends Schema.Component {
  collectionName: 'components_cookies_cookie_types';
  info: {
    displayName: 'cookieType';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    description: Attribute.Text;
    type: Attribute.String;
  };
}

export interface GlobalImage extends Schema.Component {
  collectionName: 'components_global_images';
  info: {
    displayName: '\u0421\u043D\u0438\u043C\u043A\u0430';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    description: Attribute.String;
    imageOrientation: Attribute.Enumeration<['verticle', 'horizontal']>;
  };
}

export interface GlobalParagraph extends Schema.Component {
  collectionName: 'components_global_paragraphs';
  info: {
    displayName: '\u041F\u0430\u0440\u0430\u0433\u0440\u0430\u0444';
    description: '';
  };
  attributes: {
    text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface GlobalTextEditor extends Schema.Component {
  collectionName: 'components_global_text_editors';
  info: {
    displayName: '\u0422\u0435\u043A\u0441\u0442 (editor)';
    description: '';
  };
  attributes: {
    text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    heading: Attribute.String;
  };
}

export interface GlobalTitleNText extends Schema.Component {
  collectionName: 'components_global_title_n_texts';
  info: {
    displayName: '\u0417\u0430\u0433\u043B\u0430\u0432\u0438\u044F \u0441 \u0442\u0435\u043A\u0441\u0442';
    description: '';
  };
  attributes: {
    minorHeading: Attribute.String;
    majorHeading: Attribute.String;
    text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    marker: Attribute.String;
  };
}

export interface HomePageImgLink extends Schema.Component {
  collectionName: 'components_home_page_img_links';
  info: {
    displayName: 'imgLink';
  };
  attributes: {
    text: Attribute.String;
    link: Attribute.String;
    image: Attribute.Media;
  };
}

export interface ProductProductName extends Schema.Component {
  collectionName: 'components_product_product_names';
  info: {
    displayName: 'product';
    description: '';
  };
  attributes: {
    vintage: Attribute.String;
    vina: Attribute.Relation<
      'product.product-name',
      'oneToOne',
      'api::vina.vina'
    >;
    volume: Attribute.Decimal;
    quantity: Attribute.Integer;
  };
}

export interface ShopPageShopPageInfoTab extends Schema.Component {
  collectionName: 'components_shop_page_shop_page_info_tabs';
  info: {
    displayName: 'shopPageInfoTab';
  };
  attributes: {
    tabHeading: Attribute.String;
    tabContent: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
  };
}

export interface WineProfileObemIBroj extends Schema.Component {
  collectionName: 'components_global_obem_i_broj';
  info: {
    displayName: '\u041E\u0431\u0435\u043C \u0438 \u0431\u0440\u043E\u0439';
    description: '';
  };
  attributes: {
    volume: Attribute.Integer;
    bottlesProduced: Attribute.Integer;
  };
}

export interface WineProfileWineAwards extends Schema.Component {
  collectionName: 'components_wine_profile_wine_awards';
  info: {
    displayName: '\u041D\u0430\u0433\u0440\u0430\u0434\u0438';
    description: '';
  };
  attributes: {
    awardDescription: Attribute.String;
    year: Attribute.Integer;
  };
}

export interface WineProfileWineDetails extends Schema.Component {
  collectionName: 'components_wine_profile_wine_details';
  info: {
    displayName: '\u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438 \u0434\u0430\u043D\u043D\u0438 \u043D\u0430 \u0432\u0438\u043D\u043E\u0442\u043E';
    description: '';
  };
  attributes: {
    year: Attribute.Date;
    alchohol: Attribute.Decimal;
    acids: Attribute.Decimal;
    sugars: Attribute.Decimal;
    temperatureC: Attribute.Integer;
    temperatureF: Attribute.Integer;
    volumeNCount: Attribute.Component<'wine-profile.obem-i-broj', true>;
    closing: Attribute.Relation<
      'wine-profile.wine-details',
      'oneToMany',
      'api::wine-cap.wine-cap'
    >;
  };
}

export interface WineProfileWineInformation extends Schema.Component {
  collectionName: 'components_wine_profile_wine_informations';
  info: {
    displayName: '\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u0438 \u0431\u0435\u043B\u0435\u0436\u043A\u0438';
    description: '';
  };
  attributes: {
    vinification: Attribute.Text;
    maturation: Attribute.Text;
    degustaion: Attribute.Text;
    food: Attribute.Text;
    passpordPDF: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'cookies.cookie-type': CookiesCookieType;
      'global.image': GlobalImage;
      'global.paragraph': GlobalParagraph;
      'global.text-editor': GlobalTextEditor;
      'global.title-n-text': GlobalTitleNText;
      'home-page.img-link': HomePageImgLink;
      'product.product-name': ProductProductName;
      'shop-page.shop-page-info-tab': ShopPageShopPageInfoTab;
      'wine-profile.obem-i-broj': WineProfileObemIBroj;
      'wine-profile.wine-awards': WineProfileWineAwards;
      'wine-profile.wine-details': WineProfileWineDetails;
      'wine-profile.wine-information': WineProfileWineInformation;
    }
  }
}
