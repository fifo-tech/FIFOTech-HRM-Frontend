import DesignationsCreateSection from "@/components/(admin)/(hr)/(hr-designation-page)/DesignationsCreateSection";
import DesignationsListSection from "@/components/(admin)/(hr)/(hr-designation-page)/DesignationsListSection";
import HrHeaderSection from "@/components/(admin)/(hr)/HrHeaderSection";
import { useState } from "react";

const HrDesignationPage = () => {
  const [isUpdated, setIsUpdated] = useState(false);
  return (
    <main>
      <HrHeaderSection />
      <div className="col col-span-3 flex h-full w-full">
        <div className="col-span-1 h-full w-1/3">
          <DesignationsCreateSection setIsUpdated={setIsUpdated} />
        </div>
        <div className="col-span-2 h-full w-2/3">
          <DesignationsListSection isUpdated={isUpdated} />
        </div>
      </div>
    </main>
  );
};

export default HrDesignationPage;
