export default function RightSide() {
  return (
    <div className="absolute flex flex-col justify-between end-0 w-40 h-98 bg-gray-100 border-2 rounded-r-lg">
      <div className="m-10">
        <p className="pb-8">Where Your Money Goes?</p>

        <ul className="text-sm gap-5 flex flex-col">
          <li className="flex flex-row justify-between">
            <p>Food and Drinks</p>
            <p>284.205 $</p>
          </li>
          <li className="flex flex-row justify-between">
            <p>Shopping</p>
            <p>127.205 $</p>
          </li>
          <li className="flex flex-row justify-between">
            <p>Housing</p>
            <p>400.205 $</p>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 m-7 bg-pale-blue p-4 rounded-2xl">
        <div className="flex flex-row gap-4 justify-around items-center">
          <p>LEFT IMAGE</p>
          <p>RIGHT IMAGE</p>
        </div>
        <div className="flex flex-col gap-5">
          <strong className="text-sm">Save More Money</strong>
          <i className="text-sm">
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </i>
          <button className="bg-ocean-blue hover:bg-blue-800 text-white p-2 rounded-md w-full">
            VIEW TIPS
          </button>
        </div>
      </div>
    </div>
  );
}
