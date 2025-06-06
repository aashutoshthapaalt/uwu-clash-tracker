
import { Calendar, Clock, Trophy, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-lg border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                UwU eSports
              </span>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-300 hover:text-purple-400 transition-colors">Home</Link>
              <Link to="/matches/scheduled" className="text-gray-300 hover:text-purple-400 transition-colors">Scheduled</Link>
              <Link to="/matches/past" className="text-gray-300 hover:text-purple-400 transition-colors">Past Matches</Link>
              <Link to="/players/stats" className="text-gray-300 hover:text-purple-400 transition-colors">Player Stats</Link>
            </div>
            <Link to="/admin/login">
              <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                Admin
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                UwU eSports
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Elite Clash of Clans clan management system. Track matches, analyze performance, and dominate the battlefield.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/matches/scheduled">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3">
                  <Calendar className="mr-2 h-5 w-5" />
                  View Matches
                </Button>
              </Link>
              <Link to="/players/stats">
                <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3">
                  <Trophy className="mr-2 h-5 w-5" />
                  Player Stats
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-black/40 border-purple-500/20 backdrop-blur-sm">
            <CardHeader>
              <Calendar className="h-12 w-12 text-purple-400 mb-4" />
              <CardTitle className="text-white">Match Scheduling</CardTitle>
              <CardDescription className="text-gray-400">
                Never miss a war with our advanced scheduling system and calendar integration.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-black/40 border-purple-500/20 backdrop-blur-sm">
            <CardHeader>
              <Trophy className="h-12 w-12 text-pink-400 mb-4" />
              <CardTitle className="text-white">Performance Tracking</CardTitle>
              <CardDescription className="text-gray-400">
                Detailed analytics for every player's performance across all matches.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-black/40 border-purple-500/20 backdrop-blur-sm">
            <CardHeader>
              <Users className="h-12 w-12 text-purple-400 mb-4" />
              <CardTitle className="text-white">Clan Management</CardTitle>
              <CardDescription className="text-gray-400">
                Comprehensive tools for managing your clan members and their progress.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* Stats Preview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Clan Overview</h2>
          <p className="text-gray-400">Current season performance</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 text-center border border-purple-500/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">24</div>
            <div className="text-gray-300">Active Players</div>
          </div>
          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 text-center border border-purple-500/20">
            <div className="text-3xl font-bold text-green-400 mb-2">18</div>
            <div className="text-gray-300">Wins</div>
          </div>
          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 text-center border border-purple-500/20">
            <div className="text-3xl font-bold text-red-400 mb-2">3</div>
            <div className="text-gray-300">Losses</div>
          </div>
          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 text-center border border-purple-500/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">85%</div>
            <div className="text-gray-300">Win Rate</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-sm border-t border-purple-500/20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 UwU eSports. Dominating Clash of Clans since day one.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
