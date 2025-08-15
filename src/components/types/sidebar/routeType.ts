import type { DropdownItems } from "../../sidebar/uitils/SidebarLink";
import type { BaseID } from "../global";

export interface RoutesInterface extends BaseID {
    title: string;
    route: string;
    activeIcon: React.ReactNode;
    isDropdownRoute: boolean;
    dropdowns?: DropdownItems[];
}