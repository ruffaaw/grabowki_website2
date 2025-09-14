declare interface JQuery {
  slick(options?: any): JQuery;
  slick(method: string, ...args: any[]): JQuery;
}

declare interface JQuerySlickOptions {
  accessibility?: boolean;
  adaptiveHeight?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
  arrows?: boolean;
  asNavFor?: string;
  appendArrows?: string;
  appendDots?: string;
  prevArrow?: string;
  nextArrow?: string;
  centerMode?: boolean;
  centerPadding?: string;
  cssEase?: string;
  customPaging?: (slider: any, index: number) => string;
  dots?: boolean;
  dotsClass?: string;
  draggable?: boolean;
  fade?: boolean;
  focusOnSelect?: boolean;
  easing?: string;
  edgeFriction?: number;
  infinite?: boolean;
  initialSlide?: number;
  lazyLoad?: string;
  mobileFirst?: boolean;
  pauseOnFocus?: boolean;
  pauseOnHover?: boolean;
  pauseOnDotsHover?: boolean;
  respondTo?: string;
  responsive?: Array<{ breakpoint: number; settings: any }>;
  rows?: number;
  slide?: string;
  slidesPerRow?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  speed?: number;
  swipe?: boolean;
  swipeToSlide?: boolean;
  touchMove?: boolean;
  touchThreshold?: number;
  useCSS?: boolean;
  useTransform?: boolean;
  variableWidth?: boolean;
  vertical?: boolean;
  verticalSwiping?: boolean;
  rtl?: boolean;
  waitForAnimate?: boolean;
  zIndex?: number;
  [key: string]: any;
}
