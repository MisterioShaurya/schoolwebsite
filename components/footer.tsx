import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* School Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Stellar Academy</h3>
            <p className="mb-4 text-sm text-primary-foreground/80">
              Excellence in education, inspiring tomorrow's leaders.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>123 Education Street, Learning City, LC 12345</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>info@stellaracademy.edu</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:underline">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:underline">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/staff" className="hover:underline">
                  Our Staff
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Student Portal
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Parent Portal
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Calendar
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  News & Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 font-semibold">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-primary-foreground/80">
          <p>&copy; 2024 Stellar Academy. All rights reserved.</p>
          <div className="mt-4 sm:mt-0 flex gap-6">
            <Link href="#" className="hover:underline">
              Facebook
            </Link>
            <Link href="#" className="hover:underline">
              Twitter
            </Link>
            <Link href="#" className="hover:underline">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
