import styled from "styled-components";


export default function Hero() {
  return (
    <section className="relative pt-40 pb-32">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent-violet blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <span className="border border-border bg-card px-4 py-2 rounded-full text-sm text-text-secondary">
          Trusted by modern agencies
        </span>

        <h1 className="mt-8 text-7xl md:text-8xl font-semibold tracking-tight max-w-5xl mx-auto">
          Manage your agency
          <span className="bg-gradient-to-r from-accent-cyan to-accent-violet bg-clip-text text-transparent">
            {" "}
            without the chaos
          </span>
        </h1>

        <p className="mt-8 text-xl text-text-secondary max-w-2xl mx-auto">
          Projects, clients, invoices and team collaboration unified in one
          elegant workspace.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <StyledWrapper>
      <button className="Btn-Container">
        <span className="text">let&apos;s go!</span>
        <span className="icon-Container">
          <svg width={16} height={19} viewBox="0 0 16 19" fill="nones" xmlns="http://www.w3.org/2000/svg">
            <circle cx="1.61321" cy="1.61321" r="1.5" fill="black" />
            <circle cx="5.73583" cy="1.61321" r="1.5" fill="black" />
            <circle cx="5.73583" cy="5.5566" r="1.5" fill="black" />
            <circle cx="9.85851" cy="5.5566" r="1.5" fill="black" />
            <circle cx="9.85851" cy="9.5" r="1.5" fill="black" />
            <circle cx="13.9811" cy="9.5" r="1.5" fill="black" />
            <circle cx="5.73583" cy="13.4434" r="1.5" fill="black" />
            <circle cx="9.85851" cy="13.4434" r="1.5" fill="black" />
            <circle cx="1.61321" cy="17.3868" r="1.5" fill="black" />
            <circle cx="5.73583" cy="17.3868" r="1.5" fill="black" />
          </svg>
        </span>
      </button>
    </StyledWrapper>

          
        </div>
      </div>
    </section>
  );
}


const StyledWrapper = styled.div`
  .Btn-Container {
    display: flex;
    width: 170px;
    height: fit-content;
    background-color: #1d2129;
    border-radius: 40px;
    box-shadow: 0px 5px 10px #bebebe;
    justify-content: space-between;
    align-items: center;
    border: none;
    cursor: pointer;
  }
  .icon-Container {
    width: 45px;
    height: 45px;
    background-color: #f59aff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 3px solid #1d2129;
  }
  .text {
    width: calc(170px - 45px);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.1em;
    letter-spacing: 1.2px;
  }
  .icon-Container svg {
    transition-duration: 1.5s;
  }
  .Btn-Container:hover .icon-Container svg {
    transition-duration: 1.5s;
    animation: arrow 1s linear infinite;
  }
  @keyframes arrow {
    0% {
      opacity: 0;
      margin-left: 0px;
    }
    100% {
      opacity: 1;
      margin-left: 10px;
    }
  }`;