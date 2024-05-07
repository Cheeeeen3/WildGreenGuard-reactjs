
function Icon({width, height}:{width:number, height:number}) {
  return (
    <>
    <div className="absolute bottom-0 left-0 box-content h-100 w-100 p-4 flex">
        <img
        className="icon"
        src="https://taiwan.wwg.solutions/static/plants/images/earth_nature_futaba.png"
        alt="icon"
        width = {width}
        height = {height}
        />
        <strong className="inline-block pt-4">WildGreenGuard</strong>
    </div>
    </>
  );
}



export default function LogoIcon() {
  return (
    <>
    <div>
      <Icon width={50} height={50}>
      </Icon>
    </div>
    </>
  );
}

