import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SEOContent() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Why Choose Our Tool */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Universal Downloader?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">All Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Download from all major platforms with one tool</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">No Watermark</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Clean, watermark-free videos every time</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">No Software</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Works in your browser - no app required</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How It Works - Moved after Why Choose section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <Card>
            <CardContent className="pt-6">
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">
                    1
                  </Badge>
                  <div>
                    <h3 className="font-semibold">Copy a public video link</h3>
                    <p className="text-sm text-muted-foreground">From any supported platform</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">
                    2
                  </Badge>
                  <div>
                    <h3 className="font-semibold">Paste the link above</h3>
                    <p className="text-sm text-muted-foreground">Our tool auto-detects the platform</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">
                    3
                  </Badge>
                  <div>
                    <h3 className="font-semibold">Click Download</h3>
                    <p className="text-sm text-muted-foreground">Pick your format and quality</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">
                    4
                  </Badge>
                  <div>
                    <h3 className="font-semibold">Save instantly</h3>
                    <p className="text-sm text-muted-foreground">Video downloads to your device</p>
                  </div>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>

        {/* Trust Badges */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Trusted Worldwide</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              100% Free
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              No Personal Data Stored
            </Badge>
            <Badge
              variant="secondary"
              className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
            >
              Works on All Devices
            </Badge>
            <Badge
              variant="secondary"
              className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
            >
              Fast & Reliable
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
