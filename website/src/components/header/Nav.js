import { NavLink } from "react-router-dom";
import LinkGroupDropdown, { LinkGroup } from "./LinkGroupDropDown";

function Nav({ isMobileMenuActive }) {
  return (
    <nav className={isMobileMenuActive ? "active nav" : "nav"}>
      <LinkGroupDropdown title="News" to="/news">
        <LinkGroup title="News">
          <NavLink>All News</NavLink>
          <NavLink>Companywide News</NavLink>
          <NavLink>Regional News</NavLink>
          <NavLink>Industry News</NavLink>
        </LinkGroup>
        <LinkGroup title="People News">
          <NavLink>Advancements</NavLink>
          <NavLink>Department News</NavLink>
          <NavLink>Organizational News</NavLink>
          <NavLink>Announcements</NavLink>
        </LinkGroup>
        <LinkGroup title="Events">
          <NavLink>allPort Sales Conference 2023</NavLink>
          <NavLink>Innovator Awards</NavLink>
          <NavLink>the Future of Finance</NavLink>
        </LinkGroup>
      </LinkGroupDropdown>
      <LinkGroupDropdown title="Department Services" to="/department-services">
        <LinkGroup title="Training & Education">
          <NavLink>Career Growth</NavLink>
          <NavLink>Higher Education</NavLink>
          <NavLink>Department Education</NavLink>
          <NavLink>Learning Fund</NavLink>
          <NavLink>Learning Platforms</NavLink>
        </LinkGroup>
        <LinkGroup title="Benefits">
          <NavLink>Health Benefits</NavLink>
          <NavLink>Insurance</NavLink>
          <NavLink>Time Off</NavLink>
          <NavLink>Payroll</NavLink>
          <NavLink>Retirement & Financial</NavLink>
        </LinkGroup>
        <LinkGroup title="People">
          <NavLink>Departments</NavLink>
          <NavLink>People Directory</NavLink>
          <NavLink>Purchasing Policy</NavLink>
        </LinkGroup>
        <LinkGroup title="Expenses & Travel">
          <NavLink>Corporate Card Program</NavLink>
          <NavLink>Expense Reporting</NavLink>
          <NavLink>Travel Reservations</NavLink>
        </LinkGroup>
      </LinkGroupDropdown>
      <LinkGroupDropdown title="Job Tools" to="/job-tools">
        <LinkGroup title="IT & Support">
          <NavLink>Computer Hardware</NavLink>
          <NavLink>Software Application</NavLink>
          <NavLink>Enterprise Security</NavLink>
          <NavLink>Accessories</NavLink>
          <NavLink>VPN & Remote</NavLink>
        </LinkGroup>
        <LinkGroup title="Policies">
          <NavLink>Contracts</NavLink>
          <NavLink>Corporate Policies</NavLink>
          <NavLink>Privacy</NavLink>
          <NavLink>Patents</NavLink>
          <NavLink>Litigation</NavLink>
        </LinkGroup>
        <LinkGroup title="My Office">
          <NavLink>Products</NavLink>
          <NavLink>Employee Discount</NavLink>
          <NavLink>Purchasing Policy</NavLink>
        </LinkGroup>
        <LinkGroup title="Compensation">
          <NavLink>Payroll</NavLink>
          <NavLink>Incentives</NavLink>
          <NavLink>Retirement & Financial Benefits</NavLink>
          <NavLink>Stocks</NavLink>
        </LinkGroup>
      </LinkGroupDropdown>
      <LinkGroupDropdown title="Who We Are" to="who-we-are">
        <LinkGroup title="The Company">
          <NavLink>Who We Are</NavLink>
          <NavLink>Executive Team</NavLink>
          <NavLink>Core Values</NavLink>
          <NavLink>Company Values</NavLink>
        </LinkGroup>
        <LinkGroup title="allPort Life">
          <NavLink>Employee Recognition</NavLink>
          <NavLink>Social Media</NavLink>
          <NavLink>People of allPort</NavLink>
          <NavLink>Communities @ allPort</NavLink>
        </LinkGroup>
        <LinkGroup title="Corporate Polices">
          <NavLink>Accounting & Finance</NavLink>
          <NavLink>Sales & Marketing</NavLink>
          <NavLink>Purchasing Policy</NavLink>
        </LinkGroup>
      </LinkGroupDropdown>
      <NavLink to="covid-info">Covid Info</NavLink>
    </nav>
  );
}

export default Nav;
