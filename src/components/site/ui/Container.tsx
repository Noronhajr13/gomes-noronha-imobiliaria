// Container
//   Escopo
//     Titulo e Subtitulo
//     Grid
//     Corpo
//   Escopo
// Container

const TituloContainer: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => {
  return (
    <div className="mb-12 text-center">
      <h2 className="mb-8 text-5xl font-extrabold leading-tight text-black md:text-6xl">
        {title}
      </h2>
      <span className="max-w-4xl mx-auto text-xl leading-relaxed">
        {subtitle}
      </span>
    </div>
  );
};

interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
  title: string;
  subtitle: string;
}
const Container: React.FC<ContainerProps> = ({
  className = 'py-24',
  children,
  title,
  subtitle
}) => {
  return (
    <div className="min-h-screen mt-8 bg-white">
      <section className={` ${className}  bg-white`}>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <TituloContainer title={title} subtitle={subtitle}>
          </TituloContainer>
          {children}
        </div>
      </section>
    </div>
  );
};

export default Container;
