import { Caption } from "../components/Caption";
import { Auth } from "../components/Auth";

export const Signup = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <Auth />
      </div>

      <div className="invisible lg:visible">
        <Caption />
      </div>
    </div>
  );
};
