import React from "react";
import {
  footerData,
  studentCoordinators,
  staffCoordinators,
  patron,
  convenor,
  coConveners,
} from "@/constants/footerData";



const FooterBody = () => {
  return (
    <div className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Section 1 */}
        <div className="space-y-8">
          <h2 className="text-3xl font-extrabold text-yellow-400  border-yellow-400 pb-2">
            {footerData.firstTitle}
          </h2>
          <FooterSection title={footerData.firstSubTitle} items={patron} />
          <FooterSection title={footerData.secondSubTitle} items={convenor} />
          <FooterSection title={footerData.thirdSubTitle} items={coConveners} />
          <FooterSection
            title={footerData.fourthSubTitle}
            items={studentCoordinators}
            showContact
          />
          <FooterSection
            title={footerData.fifthSubTitle}
            items={staffCoordinators}
            showContact
          />
        </div>

        {/* Section 2 */}
        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold text-yellow-400 border-yellow-400 pb-2">
            {footerData.secondTitle}
          </h2>
          <ContactInfo
            icon="📞"
            info={footerData.secondTitleMobileNumber}
            href={`tel:${footerData.secondTitleMobileNumber}`}
          />
          <ContactInfo
            icon="✉️"
            info={footerData.secondTitleEmail}
            href={`mailto:${footerData.secondTitleEmail}`}
          />
        </div>

        {/* Section 3 */}
        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold text-yellow-400 border-yellow-400 pb-2">
            {footerData.thirdTitle}
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {footerData.ThirdTitleAddress}
          </p>
        </div>
      </div>
    </div>
  );
};
const FooterSection = ({ title, items, showContact }) => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-yellow-300">{title}</h3>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.id} className="text-gray-300 hover:text-white transition-colors duration-200">
          {showContact ? (
            <ContactItem item={item} />
          ) : (
            `${item.name}, ${item.designation}, ${item.college || item.department}`
          )}
        </li>
      ))}
    </ul>
  </div>
);

const ContactItem = ({ item }) => (
  <div className="flex flex-col sm:flex-row sm:items-center">
    <span className="font-medium">{item.name} -</span>
    <a
      href={`tel:${item.mobile}`}
      className="text-yellow-400 hover:underline ml-0 sm:ml-2"
    >
      {item.mobile}
    </a>
    <span className="text-gray-400 ml-0 sm:ml-2">{item.department}</span>
  </div>
);

const ContactInfo = ({ icon, info, href }) => (
  <a
    href={href}
    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200"
  >
    <span>{info}</span>
  </a>
);

export default FooterBody;
