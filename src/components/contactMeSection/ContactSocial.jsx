import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/NRZx07" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/niraj_zha7?igsh=bjNkc3U3YTFtajBr" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
