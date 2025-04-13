import Logo from "../components/Logo";
import mainImg404 from "../assets/images/404.svg";
import ButtonBackToHome from "../components/ButtonBackToHome";

function Page404() {
  return (
    <div className="text-white text-center">
      <Logo />
      <div className="my-5">
        <div className="text-9xl">404</div>
        <div>Упс... Страница не найдена ...</div>
      </div>
      <div className="mb-14">
        <img src={mainImg404} alt="" />
      </div>
      <ButtonBackToHome />
    </div>
  );
}

export default Page404;
