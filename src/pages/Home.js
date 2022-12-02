import React, { useEffect } from "react";
import BrandSlider from "../components/BrandSlider";
import { useSelector, useDispatch } from "react-redux";
import { SellingProductsAction } from "../store/actions/action";
import UpgradeSlider from "../components/UpgradeSlider";
import KitchenSlider from "../components/KitchenSlider";
import ActivewearSlider from "../components/ActivewearSlider";
import CozyHomeSlider from "../components/CozyHomeSlider";
import LuxeSlider from "../components/LuxeSlider";
import RecentReviewSlider from "../components/RecentReviewSlider";
import SellingProductsSlider from "../components/SellingProductsSlider";
import TrendAlertSliding from "../components/TrendAlertSliding";
import SeasonalDecorSlider from "../components/SeasonalDecorSlider";
import BannerList from "../components/BannerList";

const Home = () => {
  const dispatch = useDispatch();
  const sellingPoductName = useSelector(
    (state) => state.reducerSelling.sellingProducts
  );

  useEffect(() => {
    SellingProductsAction(dispatch);
  }, [dispatch]);

  const homePageSection = (currItem, id) => {
    switch (currItem.name?.toLowerCase()) {
      case "see what's selling":
        return <SellingProductsSlider data={currItem} key={id} />;
      case "trend alerts":
        return <TrendAlertSliding data={currItem} key={id} />;
      case "seasonal decor":
        return <SeasonalDecorSlider data={currItem} key={id} />;

      case "kitchen & dining":
        return <KitchenSlider data={currItem} key={id} />;
      case "upgrade your workspace":
        return <UpgradeSlider data={currItem} key={id} />;

      case "activewear":
        return <ActivewearSlider data={currItem} key={id} />;

      case "cozy at home":
        return <CozyHomeSlider data={currItem} key={id} />;

      case "luxe connoisseur":
        return <LuxeSlider data={currItem} key={id} />;
      case "recent reviews from buyers and sellers":
        return <RecentReviewSlider data={currItem} key={id} />;

      default:
        return;
    }
  };

  return (
    <>
      <BannerList />
      <BrandSlider />
      {sellingPoductName
        ? sellingPoductName.map((currItem, id) => homePageSection(currItem, id))
        : null}
    </>
  );
};

export default Home;
