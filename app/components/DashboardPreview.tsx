export default function DashboardPreview() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
          bg-card
          border border-border
          rounded-[32px]
          p-10
          perspective-[1200px]
        "
        >
          <div
            className="
            transform-gpu
            rotate-x-6
            rotate-y-[-12deg]
            scale-[0.98]
          "
          >

            <div className="grid grid-cols-12 gap-6">

              <div className="col-span-8 bg-[#15151B] rounded-3xl p-8">
                <h3 className="text-xl font-medium mb-6">
                  Agency Performance
                </h3>

                <div className="h-64 rounded-2xl bg-gradient-to-tr from-accent-cyan/10 to-accent-violet/10 border border-border" />
              </div>

              <div className="col-span-4 space-y-6">

                <div className="bg-[#15151B] rounded-3xl p-6">
                  <p className="text-text-secondary">
                    Active Projects
                  </p>

                  <h4 className="text-4xl font-semibold text-accent-cyan">
                    128
                  </h4>
                </div>

                <div className="bg-[#15151B] rounded-3xl p-6">
                  <p className="text-text-secondary">
                    Completed Tasks
                  </p>

                  <h4 className="text-4xl font-semibold text-accent-violet">
                    3,842
                  </h4>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}