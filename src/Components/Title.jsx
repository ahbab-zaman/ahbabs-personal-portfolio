const Title = ({ title }) => {
  return (
    <div>
      <div class="relative group">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-center py-12 capitalize">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Title;
